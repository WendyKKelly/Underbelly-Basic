
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Date from '../date'
import Head from 'next/head'

import { getSortedPostsData } from '../../lib/posts'




export default function Blogs ({ allPostsData}) {
      return (
<section >
 <h2>Blog</h2>
 <ul>
   {allPostsData.map(({ id, date, title }) => (
     <li  key={id}>
<Link href="/posts/[id]" as={`/posts/${id}`}>
<a>{title}</a>
</Link>
<br />
<small>
<Date dateString={date} />
</small>
</li>

   ))}
 </ul>
</section>
)}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
