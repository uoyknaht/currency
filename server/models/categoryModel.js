var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var PlaceSchema = require('./placeModel');

require('./placeModel');

var CategorySchema = new Schema({
    // _creator : { type: String, ref: 'Place' },
    title: String,
	// categories : [PlaceSchema]
    // places: [{ type: String, ref: 'Place' }]
    //places : [{ type: Schema.Types.ObjectId, ref: 'Place' }]
});

module.exports = mongoose.model('Category', CategorySchema);
