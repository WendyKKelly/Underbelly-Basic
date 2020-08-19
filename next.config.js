const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

const nextConfigs = {
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };
        config.plugins = [
            ...config.plugins,
        ]
        return config;
    },
    target: 'serverless'
}
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
  ]




);
