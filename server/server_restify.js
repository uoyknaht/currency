var restify = require('restify');
var server = restify.createServer();
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var appConstants = require('../appConstants');

require('./db');

var Place = mongoose.model('Place');
var Category = mongoose.model('Category');

server.use(restify.bodyParser());

server.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:' + appConstants.urls.webrootPort);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  return next();
});

server.listen(appConstants.urls.apiPort, function() {
  console.log('%s listening at %s', server.name, server.url);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

server.get('/api/places', function (req, res, next) {

  Place.find(function(err, places){
    if (err) {
        return next(err);
    }

    res.json(places);
  });

  next();
});

server.get('/api/places/:id', function (req, res, next) {

  Place.findById(req.params.id, function(err, place){
    if (err) {
        return next(err);
    }
    console.log(place);
    res.json(place);
  });

  next();
});

server.post('/api/places', function(req, res, next) {
    var place = new Place(req.body);
    console.log('--------------------------------------');
    console.log('--------------------------------------');
    console.log('--------------------------------------');
    console.log(place.title);
    place.save(function(err, place){
        if (err) {
            return next(err);
        }

        res.json(place);
    });
});

server.put('/api/places/:id', function(req, res, next) {
    var id = req.params.id;
    var place = request.body;


    //var place = new Place(req.body);
    //var categories = req.body.categories;

    Place.findByIdAndUpdate(id, { $set: place },  function(err, place){
        if (err) {
            return next(err);
        }

        // var category = new Category({
        //     title: categories[0].title,
        //     _creator: place._id
        // });


        // category.save(function (err) {
        //     if (err) {
        //         return next(err);
        //     }
        // });

        res.json(place);
    });
});

server.del('/api/places/:id', function(req, res, next) {

    Place.remove({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.send();
    });
  });
