
import React, { Fragment } from 'react';

import Head from 'next/head'
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/agencyDigital';
import {
  GlobalStyle,
  ContentWrapper,
} from '../components/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from '../src/contexts/DrawerContext';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'
import Image from '../components/Image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



export default function Blog({ allPostsData }) {
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

        <section >

         <h2>Blog</h2>
         <ul>
           {allPostsData.map(({ id, date, title, thumbnail }) => (
             <li  key={id}>
             <Image src={thumbnail} alt='image'/>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
        <a>{title}</a>
        </Link>
        <br />
                   <small className={utilStyles.lightText}>
                     <Date dateString={date} />
                   </small>
        </li>

           ))}
         </ul>
        </section>
        <Footer />
          </ContentWrapper>

      </Fragment>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
