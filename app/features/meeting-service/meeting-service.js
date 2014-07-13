define(['app'], function (app) {

  'use strict';

  angular
    .module('app')
    .service('MeetingService', [
      '$http',
      '$q',
      function($http, $q) {
        var queryApi = function queryApi(meetingId) {
          var q = $q.defer();
          $http.get('/api/meetings/' + meetingId)
            .success(function(data, status, headers, config) {
              q.resolve(data);
            }).error(function(data, status, headers, config) {
              alert('error')
            });
          return q.promise;
        }

        // return {
        //   get: function get(meetingId) {
          this.get = function(meetingId) {
            return queryApi(meetingId);
          }
        // }

      }
    ]);


});
