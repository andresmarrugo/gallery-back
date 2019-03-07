var express = require('express');
var router = express.Router();
var galleryRouter= require('./gallery');
var multer= require('multer');
var upload = multer({ dest: 'images/' })
var upload=require('./upload');
var Photo=require('../models/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res){
  upload(req, res,(error) => {
    console.log(req.file)
    if(error){
       res.redirect('/?msg=3');
    }else{
      if(req.file == undefined){
        
        res.redirect('/?msg=2');
      }else{
          /**
           * Create new record in mongoDB
           */
          var fullPath = "/images/"+req.file.filename;
          var document = {
            path:     fullPath, 
            caption:   req.file.caption,
            date:  new Date()
          };

        var photo = new Photo(document); 
        photo.save(function(error){
          if(error){ 
            throw error;
          } 
          res.redirect('/gallery');
       });
    }
  }
});
});

router.use('/gallery', galleryRouter);


module.exports = router;
