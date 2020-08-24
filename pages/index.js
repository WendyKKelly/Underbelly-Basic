import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/agencyDigital';
import {
  GlobalStyle,
  ContentWrapper,
} from '../components/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from '../src/contexts/DrawerContext';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import News from '../components/News';
import Service from '../components/Service';

import BlogSection from '../components/BlogSection';
import FeatureSection from '../components/FeatureSection';
import Sad from '../components/Sad';
import AboutCopy from '../components/AboutCopy';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Underbelly Project</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Underbelly project" />
          <link
            rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alice&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <News />
          <Service />

          <BlogSection />
          <FeatureSection />
          <Sad />
          <AboutCopy />
          <Footer />
            </ContentWrapper>

      </Fragment>
    </ThemeProvider>
  )
}
