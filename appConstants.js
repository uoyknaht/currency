var webrootPort = 8080;
var apiPort = 8081;

module.exports = {
  urls: {
    webrootPort: webrootPort,
    apiPort: apiPort,
    webroot: 'http://localhost:' + webrootPort,
    api: 'http://localhost:' + apiPort
  }
};
