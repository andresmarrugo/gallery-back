var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
var Photo = mongoose.model('Photos');

//dependencies for load files and manage fs paths
const path   = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  Photo.find({}, [], {sort:{ _id: -1} }, function(err, photos) {
    console.log("Phothos: ",photos);
    if(err) throw err;
    //res.render('index', { title: 'Photo Gallery', msg:req.query.msg, photolist : photos });
    res.jsonp(photos);
});

});
  

module.exports = router;
