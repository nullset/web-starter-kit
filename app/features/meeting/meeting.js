(function () {
  'use strict';

  function MeetingCtrl($scope, MeetingService, $stateParams) {
          MeetingService.get($stateParams.id).then(function(data) {
            $scope.meeting = data;
            console.log($scope.meeting)
          });
  }

  // MainCtrl.$inject = ['$scope', 'SomeFactory'];
  MeetingCtrl.$inject = ['$scope', 'MeetingService', '$stateParams'];

  angular
    .module('app')
    .controller('MeetingCtrl', MeetingCtrl);

})();
