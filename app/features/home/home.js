define(function(require) {
  'use strict';

  require('app')
  .controller('HomeCtrl', [
    '$scope',
    function($scope) {
      alert('here i am');
    }
  ]);


});
