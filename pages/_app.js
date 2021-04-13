import React, { Fragment } from 'react';
import App from 'next/app';

import '../styles/index.css';

import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Fragment>
  );
}

export default MyApp;
