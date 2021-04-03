const CleanCSS = require("clean-css")

const config = {
  dir: {
    data: '../data',
    includes: '../templates/partials',
    input: 'content',
    layouts: '../templates/layouts',
    output: 'build'
  },
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk'
}

const formats = {
  templates: [
    'html',
    'njk',
    'md'
  ],
  assets: [
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2'
  ]
}

module.exports = function (eleventyConfig) {

  eleventyConfig.setTemplateFormats([
    ...formats.templates,
    ...formats.assets
  ])

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  return config
}
