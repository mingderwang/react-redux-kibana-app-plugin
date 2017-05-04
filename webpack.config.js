var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

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
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
