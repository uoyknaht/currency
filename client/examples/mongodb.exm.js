        // console.log(JSON.stringify(req.body, null, 2))



        // var placeCategories = place.categories;

        // Category.find(function(err, allDbCategories){
        //     if (err) {
        //         return next(err);
        //     }

        //     allDbCategories.forEach(function (category) {
        //        // Category.findOne({ _id: category._id }).exec(function (err, category) {

        //         var options;

        //         if (placeCategories.indexOf(category._id) > -1) {
        //             if (category.places.indexOf(placeId) < 0) {
        //                 options = { $push : { places: id }};
        //             }                        
        //         } else {
        //             if (category.places.indexOf(placeId) > -1) {
        //                 options = { $pulAll : { places: [id] }};
        //             }  
        //         }

        //         if (options) {
        //             Category.update(
        //                 { _id: category._id },
        //                 options,
        //                 function (err) {
        //                     if (err) {
        //                         return next(err);
        //                     }
        //                 }
        //                 );                        
        //         }

        //     });


        // });

    // Place.findById(req.params.id, function(err, place){
    //     if (err) {
    //         return next(err);
    //     }



    // });



    // // var id = req.params.id;
    // // var place = new Place(req.body);





    // Place.findByIdAndUpdate(id, { $set: place },  function(err, place){
    //     if (err) {
    //         return next(err);
    //     }

    //     res.json(place);
    // });



            // router.put('/places', function(req, res, next) {
//     saveOrUpdate(req, res, next);
// });

// function saveOrUpdate(req, res, next) {
//     var place = new Place(req.body);

//     Place.findOneAndUpdate({_id: place._id}, place, {upsert: true}, function(err, place){
//         if (err) {
//             return next(err);
//         }

//         res.json(place);
//     });
// }

// router.put('/places', function(req, res, next) {
//   var place = new Place(req.body);

//   place.findOneAndUpdate({_id: place._id}, place, {upsert: true}, (function(err, place){
//     if (err) {
//         return next(err);
//     }

//     res.json(place);
//   });
// });


// function addCategories() {

//     var categories = [
//         {
//             title: 'Panoramos'
//         },
//         {
//             title: 'Piliakalniai'
//         },
//         {
//             title: 'Paplūdimiai'
//         },
//         {
//             title: 'Pilys'
//         }
//     ];

//     for (var i = 0; i < categories.length; i++) {
//         var cat = categories[i];
//         var category = new Category(category);
//         category.save(function(err){
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }

// }


  // Category.find().populate('places').exec(function(err, categories){
  //   if (err) {
  //       return next(err);
  //   }

  //   res.json(categories);
  // });


      // Category.find({ _id: { $in: place.categories}}, function(err, categories){
      //   if (err) {
      //       return next(err);
      //   }

      //   places.categories = categories;

      //   res.json(places);
      // });

        // Story.findOne({ title: 'Once upon a timex.' }).populate('_creator').exec(function (err, story) {
//     if (err) return handleError(err);
// })