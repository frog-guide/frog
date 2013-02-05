'use strict';

// Declare app level module which depends on filters, and services
angular.module('frog', ['frog.filters', 'frog.services', 'frog.directives', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/userLogin',
        controller: UserLoginCtrl
      }).
      when('/', {
        templateUrl: 'partials/document',
        controller: DocumentCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);