(function () {
  'use strict';

  function MeetingService($http, $q) {

    var cachedMeeting;

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
        if (angular.isUndefined(cachedMeeting)) {
          alert('get new data');
          return cachedMeeting = queryApi(meetingId);
        } else {
          alert('use cached data');
          return cachedMeeting;
        }
      }
    // }
  }

  MeetingService.$inject = ['$http', '$q'];

  angular
    .module('app')
    .service('MeetingService', MeetingService);

})();
