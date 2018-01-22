var App = angular.module('JsonPage', []);
App.controller('JsonpController', function($scope,$http,$localStorage) {
	  $scope.$storage =({
		    applyPatch: {
		      original: [{"name": "Chris Brown", "repositories": ["amulet", "flickr-with-uploads"]}],
		      patch: [
		        {"op": "replace", "path": "/name", "value": "Christopher Brown"},
		        {"op": "add", "path": "/repositories/-", "value": "rfc6902"}
		      ],
		    },
      });
     $scope.patch = function(){
     	var original = $scope.$storage.applyPatch.original;
     	var patch = $scope.$storage.applyPatch.patch;
      patch = JSON.stringify(patch);         
     	$http({
	        method: "POST",
	        url: "/patch",
	        headers: {
	        	'Content-Type' : 'application/json'
	        },
	        params: {mydoc: original,thepatch: patch,token: $localStorage.token}
	      }).then(function mySuccess(response) {
	           $scope.output = response.data;
	        }, function myError(response) {
	        	console.log("responce value is",response);
	      });
     };
});
App.directive('json', () => {
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
});
