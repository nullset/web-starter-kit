(function () {
  'use strict';

  function MeetingCtrl($scope, $timeout) {
    // this.doSometing = function () {
    //   SomeFactory.doSomething();
    // };
    $scope.blah = 'BLAH';
    $timeout(function() {
      alert(333)
    }, 2000)
  }

  // MainCtrl.$inject = ['$scope', 'SomeFactory'];
  MeetingCtrl.$inject = ['$scope', '$timeout'];

  angular
    .module('app')
    .controller('MeetingCtrl', MeetingCtrl);

})();
