var express = require('express');
var fs = require('fs');
var request = require('request');
var sizeOf = require('image-size');
var Jimp = require("jimp");
var jsonpatch = require("jsonpatch");
var bodyParser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
require('./app/routes')(app);
//api to resize and save the image into upload folder//
app.post('/resize',function(req,res){
     var token = req.param('token');
     jwt.verify(token, 'supersecret', function(err, decoded){
        if(!err){
            download(req.param('url'), req.param('name'), function(filename){
               res.send(filename);
            }); 
        } else {
          res.send(err);
        }
     });   
});
//api to patch the two objects//
app.post('/patch',function(req,res){
     var users = JSON.parse((req.query['mydoc']));
     var thepatch = JSON.parse((req.query['thepatch']));
     var token = req.query['token'];
     console.log(token);
     
     jwt.verify(token, 'supersecret', function(err, decoded){
        if(!err){
            if (thepatch.constructor == Array){
                   patcheddoc = jsonpatch.apply_patch(users, thepatch);
                   res.json(patcheddoc);
             }else{
                 thepatch = [thepatch];
                 patcheddoc = jsonpatch.apply_patch(users, thepatch);
                 res.json(patcheddoc);
             } 
            
        } else {
          res.send(err);
        }
     });   
     // res.json(patcheddoc);    
});
//api to get a token after logged in
app.get('/token', function(req, res){
  var token = jwt.sign({username:"ado"}, 'supersecret',{expiresIn: 360});
  res.send(token)
});

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
     console.log('content-type:', res.headers['content-type']);
     console.log('content-length:', res.headers['content-length']);
     filename = "uploads/"+filename;
     request(uri).pipe(fs.createWriteStream(filename)).on('close', function(){
          var dimensions = sizeOf(filename);
          console.log(dimensions.width, dimensions.height);
            Jimp.read(filename, function(err,img){
      			    if (err) throw err;
      			    img.resize(50, 50).getBase64( Jimp.AUTO , function(e,img64){
      			        if(e)throw e
      			         callback(img64);
      			    });
            });
    });
  });
};
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
exports = module.exports = app;