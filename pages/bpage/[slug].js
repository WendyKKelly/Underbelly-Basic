import { getPages, getSinglePage } from '../../api/ghost_data';
import Head from 'next/head';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/agencyDigital';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../components/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from '../../components/DrawerContext';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PostPage({ page }) {
  // Render post title and content in the page from props
  let _title = page.title + ' - Stories';
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Underbelly Project</title>
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
        <div style={{ marginLeft: '20rem', marginBottom: '7rem' }}>
          <div style={{ marginBottom: '7rem' }} _title={_title}></div>
          <div className="">
            <h1
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: '3rem',
                color: '#2b7b2f',
                marginBottom: '3rem',
              }}
            >
              {page.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
}

export async function getStaticPaths() {
  const pages = await getPages();
  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = await getSinglePage(params.slug);
  return { props: { page: page } };
}
