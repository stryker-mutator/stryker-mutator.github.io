module.exports = {
  plugins: {
    'cssnano': {},
    'postcss-preset-env': {},
    '@fullhuman/postcss-purgecss': {
      content: ['src/**/*.pug', 'src/**/*.scss'],
      whitelistPatterns: [/^hljs/]
    }
  }
}
