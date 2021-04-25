import { getPosts, getSinglePost } from '../../api/ghost_data';
import Section from './blogInnerHTML';
import { DrawerProvider } from '../../components/DrawerContext';
import Sticky from 'react-stickynode';
import NavBar from '../../components/NavBar';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../components/AgencyDigital/agencyDigital.style';

import Head from 'next/head';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/agencyDigital';
export default function PostPage({ post }) {
  // Render post title and content in the page from props
  let _title = post.title + ' - Stories';
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>The Underbelly</title>
          <meta name="theme-color" content="#2c2e35" />
          <meta name="Description" content="Underbelly project" />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>

          <Section>
            <div className="imgs">
              <div className="open">
                <div className="title">{post.title}</div>
                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <div className="last">
                  <div className="date">
                    {new Intl.DateTimeFormat('default', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(new Date(post.published_at))}
                  </div>
                  <div className="dash">—</div>
                  <div className="read">
                    (reading time: {post.reading_time} min.)
                  </div>
                </div>
              </div>
              <img className="image" src={post.feature_image} />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </Section>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  return { props: { post: post } };
}
