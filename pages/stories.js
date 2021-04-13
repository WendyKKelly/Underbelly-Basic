import Container from '../components/container';
import Link from 'next/link';
import PostPreviewCard from '../components/postpreviewcard';
import { DrawerProvider } from '../components/DrawerContext';
import { getPosts } from '../api/ghost_data';
import Sticky from 'react-stickynode';
import NavBar from '../components/NavBar';
import {
  GlobalStyle,
  ContentWrapper,
} from '../components/AgencyDigital/agencyDigital.style';
import Cursor from '../components/Cursor';
import Head from 'next/head';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/agencyDigital';

export default function Stories({ posts }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>The Underbelly</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Underbelly project" />
        </Head>

        <GlobalStyle />
        <Cursor />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>
          <ul>
            {posts.map((post) => (
              <li>
                <PostPreviewCard blogpost={post} key={post} />
              </li>
            ))}
          </ul>
          <Footer />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  posts.map((post) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    post.dateFormatted = new Intl.DateTimeFormat('default', options).format(
      new Date(post.published_at)
    );
  });
  return {
    props: {
      posts,
    },
  };
}
