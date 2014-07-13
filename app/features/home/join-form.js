define(['app'], function (app) {

  'use strict';

  app
    .controller('JoinFormCtrl', [
      '$scope', 
      '$state', 
      '$http', 
      'MeetingService',
      function($scope, $state, $http, MeetingService) {
        $scope.save = function save() {

          // console.log($scope.form.meetingId)
          var errors = [],
              form = $scope.form,
              meeting;

          var meetingId = $scope.form.meetingId.replace(/\D/, '');
          if (meetingId.length > 0) {
            if (/\d{9}/.test(meetingId) === false) {
              errors.push('Must be a 9 digit number');
            }

            if (errors.length === 0) {
              // TODO : HTTP call to start meeting
              // Return promise, and .go based on that promise
              // $state.go('meeting', {id: meetingId});
              // $scope.meeting = $http.get('/api/meetings/' + meetingId)
              //   .success(function(data, status, headers, config) {
              //     alert('success');

              //     console.log(MeetingService)
              //   }).error(function(data, status, headers, config) {
              //     alert('error')
              //   });

              MeetingService.get(meetingId).then(function(data) {
                $scope.meeting = data;
                console.log($scope.meeting)
                $state.go('meeting', {id: meetingId});
              });
            } else {
              alert(errors)
            }
          }
        }

      }
    ]);


});
