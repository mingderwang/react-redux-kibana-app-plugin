var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
// If file is less than 10KB, turn it into dataURI
// else, use the raw asset and save it to a separate folder.
const embedFileSize = 10000

const assetsLoaders = [{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}, {
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [require('autoprefixer')]
        }
      }
    },
    'stylus-loader'
  ]
}, {
  test: /\.(ttf|woff|woff2)$/,
  use: 'url-loader'
}, {
  test: /\.json$/,
  use: 'json-loader'
}, {
  test: /\.(jpe?g|png|gif|svg)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: embedFileSize,
      name: 'img/[name].[sha1:hash:base64:7].[ext]'
    }
  }]
}]

const babelLoader = {
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    cacheDirectory: true,
    plugins: [
      'transform-runtime',
      'babel-plugin-add-module-exports'
    ]
  }
}

const lintLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'eslint-loader'
}

var config = {
  entry: {
    bundle1:[ APP_DIR + '/index.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
  rules: [
    ...assetsLoaders,
    babelLoader,
    lintLoader
  ]
},
};


module.exports = config;
