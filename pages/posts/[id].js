import React, { Fragment } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Image from '../../components/Image';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme/agencyDigital';
import {
  GlobalStyle,
  ContentWrapper,
} from '../../components/AgencyDigital/agencyDigital.style';
import { getAllPostIds, getPostData } from '../../lib/posts'

import Date from '../../components/date'


export default function Post({ postData }) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
    <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <Image src={postData.thumbnail} alt="image" />
      <h1 >{postData.title}</h1>
      <div>


    <Date dateString={postData.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
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
