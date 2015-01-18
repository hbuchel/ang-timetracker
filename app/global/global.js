'use strict';

angular.module('timetrack.global', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     templateUrl: 'home/home.html',
//     controller: 'GlobalCtrl'
//   });
// }])

.controller('GlobalCtrl', function($scope, $location, Auth) {
	$scope.auth = Auth;
  	$scope.user = $scope.auth.$getAuth();

  	$scope.login = function() {
  		$scope.auth.$authWithOAuthRedirect('github');
  		$location.path( "/#/home" );
  	}

  	$scope.logout = function() {
  		$scope.auth.$unauth();
  		console.log("You have been logged out!");
  		$location.path( "/#/home" );
  	}
});
