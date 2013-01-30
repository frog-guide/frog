'use strict';

// Declare app level module which depends on filters, and services
angular.module('frog', ['frog.filters', 'frog.services', 'frog.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);

  $(document).ready(function(){
    $("#cad-frog").on("click", function(){
      if ( $("#form-cadastro").is(':visible') ) {
        $("#form-cadastro").hide();
      }
      else {
      $("#form-cadastro").show();
      }
      return false;
    });

    $("#show-cadastro").on("click", function(){
      $("#login").hide();
      $("#form-cadastro").hide();
      $("#cadastro").show();
    })
  });