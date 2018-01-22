// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(filename){
//       console.log(filename);
//       //var dimensions = sizeOf(filename);
//       //console.log(dimensions.width, dimensions.height);
//       // resizeImg(fs.readFileSync(filename), {width: 50, height: 50}).then(buf => {
//       //     fs.writeFileSync('chnagefile.png', buf);
//       //     console.log(buf);
//       // });   
// });
// requestImageSize('https://www.google.com/images/srpr/logo3w.png')
// .then(size => console.log(size))
// .catch(err => console.error(err));

// const imgURL = "https://www.google.com/images/srpr/logo3w.png";
// const express = require('express'); 
// const app = express()
// var Jimp = require("jimp")
// app.get('/',function(req, res){
//   Jimp.read(imgURL, function(err,img){
//     if (err) throw err;
//     img.resize(50, 50).getBase64( Jimp.AUTO , function(e,img64){
//         if(e)throw e
//         res.send('<img src="'+img64+'">')
//     });
//   });
// });
// app.listen(3000);

//     var data = {
				//  image_url:$scope.imageurl
				// };

	  	  //   $http.get("/resizeImage/" + url).then(function successCallback(response){
      //             console.log("response value is",response);
		    //      // $scope.contact = response.data;
		    //  },function errorCallback(response){
		    //        console.log("error value is",response);
		    // });
		  //   $http.post('/contactlist',$scope.imageurl).then(function successCallback(response){
			 //         console.log("response value is",response);
			 //    },function errorCallback(response){
			 //        console.log("error is",response);
			 // });


			 app.get('/resize', function (req, res) {
     //console.log("function called");
     download('https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg', 'nature.jpeg', function(filename){
      //res.send('<img src="'+filename+'">');

        res.send(filename);
    });
});
app.get('/resizeImage/:url',function(req, res){
     var url = req.params.url;
     console.log("url value is ",url);
});


angular.module('JsonPage', []).controller('JsonpController', function($scope,$http) {
     $scope.patch = function(){
     	//var returnValue =IsJsonString($scope.mydoc);
     	//console.log(returnValue);
     	//var mydocs = $scope.mydoc.replace(/\"([^(\")"]+)\":/g,'$1:');
     	//var thepatchs = $scope.thepatch.replace(/\"([^(\")"]+)\":/g,'$1:');
     	//console.log("in controller mydoc and patch value is",mydoc,thepatch);
     	//mydocs = mydocs.replace(/"/g, '\'');
     	//thepatchs = thepatchs.replace(/"/g, '\'');
     	//console.log("mydocs is ",mydocs);
     	

     	//console.log(JSON.stringify(JSON.parse($scope.mydoc)),JSON.stringify(JSON.parse($scope.thepatch)));
     	$http({
	        method: "POST",
	        url: "/patch",
	        params: {mydoc: $scope.mydoc,thepatch: $scope.thepatch}
	      }).then(function mySuccess(response) {
	      	   console.log(response.data);
	           $scope.patcheddoc = response.data;
	        }, function myError(response) {
	        	console.log("responce value is",response);
	      });
     };
 //     function IsJsonString(str) {
	//     try {
	//         JSON.parse(str);
	//     } catch (e) {
	//         return false;
	//     }
	//     return true;
	// }
	

});


<!-- <div class="jumbotron text-center">
	<h>Json Patch called</h>
	<textarea rows="10" ng-model="mydoc"></textarea>
    <textarea rows="10" ng-model="thepatch"></textarea>
    <textarea rows="20" ng-model="patcheddoc"></textarea>

</div> -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Form control: textarea</h2>
  <div class="col-md-8">
  <form>
    <div class="col-md-4">
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="5" ng-model="mydoc"></textarea>
      </div>
     </div>
     <div class="col-md-4">
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="5" ng-model="thepatch"></textarea>
      </div>
     </div>
      
     <div class="col-md-6">
       <div class="form-group">
        <button type="button" class="btn btn-default" ng-click="patch()">PATCH</button>
        </div>
     </div>
  </form>
  
  </div>
  <div class="col-md-4" style="position:relative;right:150px;">
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="10" ng-model="patcheddoc"></textarea>
      </div>
     </div>
      
</div>

</body>
</html>


// var app = angular.module('JsonPage', []).controller('JsonpController', function($scope,$http) {
     
// });
var App = angular.module('JsonPage', [])
.directive('json', () => {
  return {
    restrict: 'E',
    template: `
      <textarea ng-model="raw" ng-change="change()" ng-blur="blur()" ng-class="className"></textarea>
      <div ng-if="model.$valid" class="valid">Valid JSON</div>
      <div ng-if="model.$invalid" class="invalid">Invalid JSON: {{error}}</div>
    `,
    scope: {},
    require: 'ngModel',
    link: (scope, el, attrs, ngModel) => {
      scope.model = ngModel;

      scope.className = attrs.class;

      // scope.raw.viewChangeListeners = [];
      scope.change = () => {
        ngModel.$setViewValue(scope.raw);
      };

      ngModel.$parsers = [(string) => {
        try {
          var obj = angular.fromJson(string);
          ngModel.$setValidity('jsonInvalid', true);
          return obj;
        }
        catch (exc) {
          scope.error = exc.message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
          ngModel.$setValidity('jsonInvalid', false);
          // otherwise return the last valid value so that we don't lose the original
          return ngModel.$modelValue;
        }
      }];

      ngModel.$render = () => {
        // just set the textarea to the JSON, but only if the current raw value is valid JSON
        if (ngModel.$valid) {
          scope.raw = angular.toJson(ngModel.$modelValue, true);
        }
      };
    }
  };
}).controller('JsonpController', ($scope, $localStorage) => {
  $scope.$storage.applyPatch.original = "guddu";
  $scope.guddu = "kumar";
  // $scope.$storage = $localStorage.$default({
  //   createPatch: {
  //     input: {"name": "Chris Brown", "repositories": ["amulet", "flickr-with-uploads"]},
  //     output: {"name": "Christopher Brown", "repositories": ["amulet", "flickr-with-uploads", "rfc6902"]},
  //   },
  //   applyPatch: {
  //     original: {"name": "Chris Brown", "repositories": ["amulet", "flickr-with-uploads"]},
  //     patch: [
  //       {"op": "replace", "path": "/name", "value": "Christopher Brown"},
  //       {"op": "add", "path": "/repositories/-", "value": "rfc6902"}
  //     ],
  //   },
  // });
  // $scope.createPatch = {patch: []};
  // $scope.applyPatch = {output: null};

  // $scope.$watchGroup(['$storage.createPatch.input', '$storage.createPatch.output'], () => {
  //   var input = $scope.$storage.createPatch.input;
  //   var output = $scope.$storage.createPatch.output;
  //   //$scope.createPatch.patch = createPatch(input, output);
  // });

  // $scope.$watchGroup(['$storage.applyPatch.original', '$storage.applyPatch.patch'], () => {
  //   //$scope.applyPatch.output = angular.copy($scope.$storage.applyPatch.original);
  //  // applyPatch($scope.applyPatch.output, $scope.$storage.applyPatch.patch);
  // });

  // $scope.copy = () => {
  //   $scope.$storage.applyPatch.original = $scope.$storage.createPatch.input;
  //   $scope.$storage.applyPatch.patch = $scope.createPatch.patch;
  // };
});


<style>
    body{margin:0;padding:0 0 20px 0}
nav{position:fixed;top:0;left:0;right:0;color:#555;font-size:90%;border-bottom:1px solid #DDD;background-color:rgba(255,255,255,.95)}
section{margin:5px auto;max-width:800px}
h2,h3,h4{margin:.5ex 0;font-family:sans-serif}
.columns-2{display:flex;justify-content:space-between;align-items:center}
.columns-2>div{width:50%;flex-grow:1}
hr{max-width:800px}
pre{margin:5px 0}
table{width:100%;border-collapse:collapse}
table td{padding:1px 4px 2px 2px;vertical-align:top}
.input{background-color:rgba(255,255,0,.15)}
.output{background-color:rgba(127,255,0,.15)}
.patch{background-color:rgba(0,0,255,.1)}
textarea{box-sizing:border-box;display:block;margin:5px 0;width:100%;min-height:200px;font-family:monospace}
.invalid,.valid{font-size:90%}
.valid{color:#272}
.invalid{color:#A33}
  </style>


   //console.log("req value is",req.param('mydoc'),req.param('thepatch'));
       //mydoc = req.param('mydoc');
       //thepatch = req.param('thepatch'

      
     mydoc = req.param('mydoc');
     thepatch = req.param('thepatch');
      console.log("original value is",mydoc,thepatch);
    //  mydoc1 = {
    //   "baz": "qux",
    //   "foo": "bar"
    // };
    // thepatch1 = [
    //   { "op": "replace", "path": "/baz", "value": "boo" }
    // ]
    // console.log("dublicate value is",mydoc1,thepatch1);
    // if(req.param('mydoc') == mydoc1 && req.param('thepatch') == thepatch1){
    //     console.log("both object are same ");
    // }else{
    //   console.log("both are not same");
    // }

      patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
     
     res.json(patcheddoc);


     // mydoc = req.param('mydoc');
      // thepatch = req.param('thepatch');
    //  console.log("original value is",mydoc,thepatch);
     //var users = [{first: 'Chris', last: 'Brown', age: 20}];
     //var users=[];
     var users = JSON.parse((req.query['mydoc']));
     var thepatch = JSON.parse((req.query['thepatch']));
     //var abc = JSON.parse(thepatch);
     //var xyz = JSON.parse(abc);
     console.log(users,thepatch);
     patcheddoc = jsonpatch.apply_patch(users, thepatch);
      // rfc6902.applyPatch(users, [
      //   {op: 'replace', path: '/0/age', value: 21},
      //   {op: 'add', path: '/-', value: {first: 'Raphael', age: 37}},
      // ]);
      //var abc = rfc6902.applyPatch(users,thepatch);
      // var users = [];
      // users.push(req.param('mydoc'));
      // abc = rfc6902.applyPatch(mydoc,thepatch);
       res.json(patcheddoc);



       console.log("original value is",$scope.$storage.applyPatch.original,$scope.$storage.applyPatch.patch);
      var original = $scope.$storage.applyPatch.original;
      var patch = $scope.$storage.applyPatch.patch;
     // original = JSON.stringify(original);
      patch = JSON.stringify(patch);
      // var abc = [{first: 'Chris', last: 'Brown', age: 20}];
      // var patch = [
            //         {op: 'replace', path: '/0/age', value: 21},
            //         {op: 'add', path: '/-', value: {first: 'Raphael', age: 37}},
            //       ];
      // patch = JSON.stringify(patch);            
      $http({
          method: "POST",
          url: "/patch",
          headers: {
            'Content-Type' : 'application/json'
          },
          params: {mydoc: original,thepatch: patch}
        }).then(function mySuccess(response) {
             console.log(response.data);
             //$scope.patcheddoc = response.data;
          }, function myError(response) {
            console.log("responce value is",response);
        });
     };



//$scope.tagline = 'To the moon and back!'; 
    var refresh = function(){
         $http.get('/resize').then(function successCallback(response) {
             console.log("responce value is",response.data);
               $scope.data = response.data;
             }, function errorCallback(response) {
             console.log("responce value is",response);
          });
    }

     //console.log($scope.imageurl);
      //refresh();
      // angular.module('MainPage', []).controller('MainController', function($scope) {
//  //var vm = this;
//  //vm.login = login;
//  $scope.login = function(){
//      console.log("login function called");
//  };

    

// });

// if($localStorage.token){
  //     $scope.loggedIn = true;
  //    }else{
  //  $scope.loggedIn = false;
  // }
    // var abc = [{first: 'Chris', last: 'Brown', age: 20}];
      // var patch = [
            //         {op: 'replace', path: '/0/age', value: 21},
            //         {op: 'add', path: '/-', value: {first: 'Raphael', age: 37}},
            //       ];
      // patch = JSON.stringify(patch);
      // original = JSON.stringify(original);


       // var secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"};
          // res.json(secrets);
           //  download(req.param('url'), req.param('name'), function(filename){
    //   //res.send('<img src="'+filename+'">');
    //      //console.log(filename);
    //     res.send(filename);
    // });  

    // Register a route that requires a valid token to view data
// app.get('/api', function(req, res){
//   var token = req.query.token;
//   jwt.verify(token, 'supersecret', function(err, decoded){
//     if(!err){
//       var secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"};
//       res.json(secrets);
//     } else {
//       res.send(err);
//     }
//   })
// });

//console.log($localStorage.token);
      console.log("original value is",$scope.$storage.applyPatch.original,$scope.$storage.applyPatch.patch);
var requestImageSize = require('request-image-size');
var ImageResize = require('node-image-resize');
var resizeImg = require('resize-img');
var rfc6902 = require('rfc6902');
// var flowcopy = require('flow-copy');
//app.use(express.static(__dirname + '/public'));
console.log("body value is",req.param('url'),req.param('name'),req.param('token'));


app.get('/jsonpatch', function (req, res) {
     mydoc = {
      firstName: "Albert", contactDetails: { phoneNumbers: [] }
    };
    thepatch = [
        { op: "replace", path: "/firstName", value: "Joachim" },
        { op: "add", path: "/lastName", value: "Wester" },
        { op: "add", path: "/contactDetails/phoneNumbers/0", value: { number: "555-123" }  }
    ]
    console.log(mydoc,thepatch);
    patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
    res.send(patcheddoc);
});