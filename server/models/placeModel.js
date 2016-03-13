var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = require('./categoryModel');

var PlaceSchema = new Schema({
  // _creator : { type: Schema.Types.ObjectId, ref: 'Category' },
  title: String,
  address: String,
  isAddressApproximate: Boolean,
  latitude: {
    type: Number
    // default: 0
  },
  longitude: {
    type: Number
    // default: 0
  },
  createdOn : {
        type : Date,
        default : Date.now
  },
  modifiedOn : {
        type : Date,
        default : Date.now
  },
  categories : [CategorySchema]
  // categories : [
	 //  {
		//   type: Schema.Types.ObjectId,
		//   ref: 'Category'
	 //  }
  // ]
});

module.exports = mongoose.model('Place', PlaceSchema);
