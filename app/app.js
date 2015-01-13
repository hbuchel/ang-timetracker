'use strict';

// Declare app level module which depends on views, and components
angular.module('timetrack', [
  'ngRoute',
  'timetrack.view1',
  'timetrack.view2',
  'timetrack.home',
  'timetrack.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
