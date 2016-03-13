var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var appConstants = require('../appConstants');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(appConstants.urls.webrootPort, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + appConstants.urls.webroot);
});
