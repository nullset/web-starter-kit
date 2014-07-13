(function (angular) {
  'use strict';

  angular
  .module('app', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }]);

}(window.angular));
