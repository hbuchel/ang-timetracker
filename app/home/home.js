'use strict';

angular.module('timetrack.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope) {
	$scope.entries = [];

	$scope.entry = {
		entryTime: '',
		entryDate: '',
		entryDescription: ''
	};

	$scope.submitEntry = function() {
		$scope.entries.push($scope.entry);
		$scope.entry = {
			entryTime: '',
			entryDate: '',
			entryDescription: ''
		};
	}
});
