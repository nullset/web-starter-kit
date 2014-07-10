(function () {
  'use strict';

  function HomeCtrl($scope, $timeout) {
    // this.doSometing = function () {
    //   SomeFactory.doSomething();
    // };
    $scope.blah = 'BLAH';
    $timeout(function() {
      $scope.isFieldShown = true;
    }, 2000)
  }

  // MainCtrl.$inject = ['$scope', 'SomeFactory'];
  HomeCtrl.$inject = ['$scope', '$timeout'];

  angular
    .module('app')
    .controller('HomeCtrl', HomeCtrl);

})();
