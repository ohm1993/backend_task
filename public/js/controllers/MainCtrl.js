var app = angular.module("MainPage",[]);
app.controller("MainController",function($scope,$http,$localStorage,$location,$route){
	var vm = this;
	vm.login = login;
	function login(){
		  if(vm.username!=null && vm.password!=null){
                 $http.get('/token').then(function successCallback(response){
                     //console.log("token value is",response.data);
                         $localStorage.token = response.data;
                         $location.path('/resizeImage');
                     }, function errorCallback(response) {
	                 console.log("error is",response);
                 });
		  }else{
		  	  console.log("user is not valid");
		  }
	};
	$scope.logout = function(){
         delete $localStorage.token;
         $location.path('/');
	}
});
