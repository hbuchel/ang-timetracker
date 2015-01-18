'use strict';

// Declare app level module which depends on views, and components
angular.module('timetrack', [
  'ngRoute',
  'timetrack.view1',
  'timetrack.view2',
  'timetrack.entry',
  'timetrack.projects',
  'timetrack.version',
  'timetrack.global',
  'timetrack.auth',
  'firebase'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])
.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/#/login.html");
    }
  });
}]);
