const path = require('path');
module.exports = {
  entry: './src/js/all.js',
  output: {
    path: path.resolve(__dirname, 'root', 'dist'),
    filename: 'all.bundle.js'
  },
  mode: 'production'
};