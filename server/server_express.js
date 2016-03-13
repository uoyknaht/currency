var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


require('./models/Category');
require('./models/Place');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

// app.use('/public', express.static(path.join(__dirname, 'public')))

http.listen(3001, function(){
  console.log('port: 3001, environment: ' + app.get('env'));
});




app.set('port', (process.env.PORT || 3001));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../client/index.html'));
});

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));






app.use('/', routes);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//////////////////////////////
//////////////////////////////

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/news');

var mongoose = require('mongoose');
// mongodb-uri 0.9.x
var uriUtil = require('mongodb-uri');

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
var options = {
    server: {
        socketOptions: {
        keepAlive: 1, connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS : 30000
        }
    }
};

/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
//var mongodbUri = 'mongodb://user:pass@host:port/db';
var mongodbUri = 'mongodb://pranas:crap777999@ds035250.mongolab.com:35250/tour';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);




var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.
});


//////////////////////////////
//////////////////////////////



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});









// var io = require('socket.io')(http);

// io.on('connection', function(socket){

//   socket.on('tourEditPlace', function(place){
//     // io.emit('tourEditPlace', place);
//     socket.broadcast.emit('tourEditPlace', place);
//   });


// });





module.exports = app;
