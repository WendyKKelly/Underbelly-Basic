const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

require('dotenv').config();

module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],

        mozjpeg: {
          quality: 90,
        },
        optipng: {
          optimizationLevel: 3,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],

    withFonts,
    withCSS,
  ],
  {
    env: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      REPO_FULL_NAME: process.env.REPO_FULL_NAME,
      BASE_BRANCH: process.env.BASE_BRANCH,
    },
  }
);
