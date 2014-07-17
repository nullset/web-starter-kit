// Defer bootstrapping the angular app until angular.resumeBootstrap() is called
// Works around issue of angular modules (like ui.router) being bootstrapped before angular is ready
// https://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

define(function(require) {
  'use strict';

  var angular = require('angular');
  require('ui.router');

  // When angular is ready, bootstrap the app
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });

  // Define the app
  var app = angular.module('app',['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }]);

  // Returning "app" so it can be used in angular service, controller, filter definitions
  return app;
});
