import React, { Fragment } from 'react';
import App from 'next/app';
import FavIcon from '../public/image/favicon.ico';
import Image from 'next/image';
import '../styles/index.css';
import '../styles/global.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Fragment>
      <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
