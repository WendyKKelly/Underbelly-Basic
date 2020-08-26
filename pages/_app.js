import React, { Fragment } from 'react';
import App from 'next/app';
import { withTina } from 'tinacms';
import { MarkdownFieldPlugin, HtmlFieldPlugin } from 'react-tinacms-editor';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default withTina(MyApp, {
  enabled: true,
  sidebar: true,
  plugins: [MarkdownFieldPlugin, HtmlFieldPlugin],
});
