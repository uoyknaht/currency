var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var Place = mongoose.model('Place');

router.get('/api/places', function(req, res, next) {

    var query = {};

    if (req.query.categories) {
        query.categories = {
            $elemMatch: {
                slug: {
                    $in: req.query.categories.split(',')
                }
                // can be more:
                // by: 'shipping'
            }
        };
    }

    // https://docs.mongodb.org/manual/reference/operator/query/regex/
    if (req.query.search) {
        query.title = { 
            $regex: new RegExp('.*' + req.query.search + '.*', 'i')
        }
    }


  Place
    .find(query)
    .sort({ title: 1 })
    .exec(function(err, places){
        if (err) {
            return next(err);
        }

        res.json(places);
  });
});

router.get('/api/places/:id', function(req, res, next) {

    Place.findById(req.params.id)
		//.populate('categories')
		.exec(function(err, place) {
	        if (err) {
	            return next(err);
	        }

        	res.json(place);
    });

});

router.post('/api/places', function(req, res, next) {
    var place = new Place(req.body);

    place.save(function(err, place){
        if (err) {
            return next(err);
        }

        res.json(place);
    });
});

router.post('/api/places/:id/edit', function(req, res, next) {

    var placeId = req.params.id;
    var place = new Place(req.body);

    Place.findByIdAndUpdate(placeId, place, { new: true }, function (err, newPlace) {
        if (err) {
            return next(err);
        }

        res.json(newPlace);
    });
});

router.delete('/api/places/:id', function(req, res, next) {

    Place.remove({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.send();
    });

});

router.get('/api/categories', function(req, res, next) {
  Category.find().sort({ title: 1 }).exec(function(err, categories){
    if (err) {
        return next(err);
    }

    res.json(categories);
  });

});

module.exports = router;