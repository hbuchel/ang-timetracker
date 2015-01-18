'use strict';

angular.module('timetrack.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', function($scope, Project, Entry) {
	$scope.showSidebar = false;

	$scope.projects = Project.all;

	$scope.Project = {
		projectName: ''
	};

	$scope.submitProject = function() {
		console.log("Submitted Project");
		Project.create($scope.project).then( function() {
			$scope.project = {
				projectName: ''
			}
		});
	}

	$scope.toggleSidebar = function() {
		$scope.showSidebar = !$scope.showSidebar;
	}
});