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
        'css-loader', // translates CSS into CommonJS modules
        {
          loader: "sass-loader",
          options: {
            implementation: require('sass')
          }
        }
      ]
    }]
  }
};
