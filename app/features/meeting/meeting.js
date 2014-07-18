define(function(require) {
  'use strict';

  require('app')
    .controller('MeetingCtrl', [
      '$scope',
      'MeetingService',
      '$stateParams',
      function($scope, MeetingService, $stateParams) {
          MeetingService.get($stateParams.id).then(function(data) {
            $scope.meeting = data;
            console.log($scope.meeting);
          });
      }
    ]);


});
