var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uriUtil = require('mongodb-uri');
var appConstants = require('../appConstants');

require('./db');
require('./models/categoryModel');
require('./models/placeModel');

var routes = require('./routes/placeRoutes');
var app = express();
var http = require('http').Server(app);

http.listen(appConstants.urls.apiPort, function() {
  console.log('%s listening at %s', http.name, http.url);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", appConstants.urls.webroot);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

