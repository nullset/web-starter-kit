// Defer bootstrapping the angular app until angular.resumeBootstrap() is called
// Works around issue of angular modules (like ui.router) being bootstrapped before angular is ready
// https://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

define(['angular', "angular-ui-router", '_'], function () {

  // When angular is ready, bootstrap the app
  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });

  // Define the app
  var app = angular.module('app',['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }]);

  return app;
});

// define(function (require, exports, module) {
//   // var $ = require('$');
//   // var http = require('plugins/http');
//   // var router = require('plugins/router');

//   // require('knockout.validation');


//   // module.exports = Home;
// });


// (function () {
//   'use strict';

//   angular
//   .module('app', ['ui.router']);

// })();
