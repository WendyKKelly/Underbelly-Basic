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
import { DrawerProvider } from '../components/DrawerContext';
import NavBar from '../components/NavBar';

import FeatureSection from '../components/FeatureSection';

import Footer from '../components/Footer';

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Underbelly Project</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Underbelly project" />

          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Alice&family=Raleway&display=swap"
          />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>

          <FeatureSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
}