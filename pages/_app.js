
import React, { Fragment } from 'react';
import App from 'next/app'
import { Tina, TinaCMS } from 'tinacms'

import { withTina } from 'tinacms'
function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
  

      <Component {...pageProps} />
    </Fragment>
  );
};

export default withTina(MyApp)
