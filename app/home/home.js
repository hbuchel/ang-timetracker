'use strict';

angular.module('timetrack.entry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'EntryCtrl'
  });
}])

.controller('EntryCtrl', function($scope, Entry, Project) {
	$scope.showSidebar = false;

	$scope.toggleSidebar = function() {
		$scope.showSidebar = !$scope.showSidebar;
	}

	$scope.entries = Entry.all;

	$scope.projects = Project.all;

	$scope.Entry = {
		entryTime: '',
		entryDate: '',
		entryDescription: ''
	};

	$scope.submitEntry = function() {
		Entry.create($scope.entry).then( function() {
			$scope.entry = {
				entryTime: '',
				entryDate: '',
				entryDescription: ''
			}
		});
	}
	$scope.deleteEntry = function (entry) {
		Entry.delete(entry);
	}
});
