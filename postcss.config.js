const path = require('path')

const postCSSAutoprefixer = require('autoprefixer')
const postCSSNested = require('postcss-nested')
const postCSSVariables = require('postcss-css-variables')
const postCSSCustomMedia = require('postcss-custom-media')
const postCSSColorFunc = require('postcss-color-function')
const postCSSEasyImport = require('postcss-easy-import')

module.exports = {
  plugins: [
    postCSSEasyImport(),
    postCSSNested(),
    postCSSVariables(),
    postCSSCustomMedia(),
    postCSSAutoprefixer(),
    postCSSColorFunc(),
  ],
}
