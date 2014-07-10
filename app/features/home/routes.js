(function () {
  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
        url: "",
        templateUrl: "features/home/home.html",
        controller: 'HomeCtrl'
      });
    }]);

})();