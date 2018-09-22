const path = require('path');
module.exports = {
  entry: ['./src/js/all.js', './src/scss/all.scss'],
  output: {
    path: path.resolve(__dirname, 'generated-root'),
    filename: 'js/all.bundle.js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'file-loader', options: { name: 'css/[name].css' } }, // Extract css into seperate file
        'postcss-loader',
        'extract-loader',
        'css-loader?-minimize', // translates CSS into CommonJS modules
        'sass-loader' // compiles Sass to CSS, using Node Sass
      ]
    }]
  }
};
