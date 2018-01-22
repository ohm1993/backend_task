angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController',
			controllerAs: 'vm'
		})

		.when('/resizeImage', {
			templateUrl: 'views/resize.html',
			controller: 'ResizeController'
		})

		.when('/jsonp', {
			templateUrl: 'views/jsonp.html',
			controller: 'JsonpController'	
		});

	$locationProvider.html5Mode(true);

}]);