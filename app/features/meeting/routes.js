define(['app'], function (app) {

  'use strict';

  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('meeting', {
        url: "/{id:[0-9]{3}-?[0-9]{3}-?[0-9]{3}}",
        templateUrl: "features/meeting/meeting.html",
        controller: 'MeetingCtrl'
      });
    }]);


});
