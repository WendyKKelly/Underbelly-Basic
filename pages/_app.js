import React, { Fragment } from 'react';
import App from 'next/app';

import '../styles/index.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
