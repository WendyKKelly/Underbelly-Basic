
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPresetEnv = require('postcss-preset-env')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss ({
     ...(process.env.NODE_ENV === 'production'
      ? [
          [
            purgecss ({
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx,css}',
              ],

              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
            }),
          ],
        ]
      : [])}),
    postcssPresetEnv({
      stage: 0
    }),
  ],
}
