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
          <meta name="theme-color" content="#FF825C" />
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
            <img className="img " src={post.feature_image} />
            <div style={{ marginLeft: '10rem', marginRight: '7rem' }}>
              <h1>{post.title}</h1>
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
