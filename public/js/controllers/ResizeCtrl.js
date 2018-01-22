angular.module('ReSize', []).controller('ResizeController', function($scope,$http,$localStorage) {
	  $scope.resize = function(){
	  	console.log($localStorage.token);
	  	    var url = $scope.imageurl;
	  	    var filename = url.substring(url.lastIndexOf('/')+1);
			 $http({
		        method: "POST",
		        url: "/resize",
		        params: {url: $scope.imageurl,name: filename,token: $localStorage.token}
		      }).then(function mySuccess(response) {
		          $scope.data = response.data;
		         console.log(response.data);
		        }, function myError(response) {
		        	console.log("responce value is",response);
		      });
	  };
});