define(['jquery/dist/jquery'], function ($) {
  console.log($('body').length)

    return {
        getBody: function () {
            return $('body');
        }
    }
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
