// Javascript Entry Point
var app = angular.module("maxcntrl", [] );

app.controller('jamie1', function($scope) {
	$scope.formModel = {};
	$scope.onSubmit = function() {
		console.log("I'm submitted!");
		console.log($scope.formModel);
	};

});

app.controller ('Kacy', function($scope) {
	$scope.name = 'Parent';
	$scope.reset = function () {
		$scope.name = 'Parent';
	}
});

app.controller ('Eden', function($scope) {
	
});