window.name = 'NG_DEFER_BOOTSTRAP!';

define(['angular', "angular-ui-router"], function () {
    return angular.module('app',['ui.router']);
});

// define(function (require, exports, module) {
//   // var $ = require('$');
//   // var http = require('plugins/http');
//   // var router = require('plugins/router');

//   // require('knockout.validation');


//   // module.exports = Home;
// });


// (function () {
//   'use strict';

//   angular
//   .module('app', ['ui.router']);

// })();
