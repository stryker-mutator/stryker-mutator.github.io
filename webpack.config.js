const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/js/all.js', './src/scss/all.scss'],
  output: {
    path: path.resolve(__dirname, 'generated-root'),
    filename: 'js/all.bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/all.css' })]
};
