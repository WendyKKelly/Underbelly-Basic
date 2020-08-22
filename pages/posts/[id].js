import React, { Fragment } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Sticky from 'react-stickynode';
import Image from '../../components/Image';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/agencyDigital';
import {
  GlobalStyle,

} from '../../components/AgencyDigital/agencyDigital.style';
import { getAllPostIds, getPostData } from '../../lib/posts'
import { DrawerProvider } from '../../src/contexts/DrawerContext';
import Container from '../../components/UI/Container';
import Section, {
  ContentWrapper,
  BannerContent,
  ImageGroup,
} from '../../Banner/banner.style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Post({ postData }) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
    <Head>
        <title>{postData.title}</title>
      </Head>
      <GlobalStyle />

      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <NavBar />
          </DrawerProvider>
        </Sticky>
      <article>
        <Container>

      <h1 >{postData.title}</h1>

    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Container>
    </article>
    <Footer />
      </ContentWrapper>

    </Fragment>
  </ThemeProvider>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
