
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {
    server: {
        socketOptions: {
        	keepAlive: 1,
			connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS : 30000
        }
    }
};

var mongodbUri = 'mongodb://pranas:crap777999@ds035250.mongolab.com:35250/tour';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.
});
