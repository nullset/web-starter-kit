require.config({
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-ui-router': {
      deps: [
        'angular'
      ]
    }
  },
  paths: {
    angular: '../bower/angular/angular',
    'angular-strap': '../bower/angular-strap/dist/angular-strap.min',
    'angular-strap.tpl': '../bower/angular-strap/dist/angular-strap.tpl.min',
    'angular-ui-router': '../bower/angular-ui-router/release/angular-ui-router',
    requirejs: '../bower/requirejs/require',
    jquery: '../bower/jquery/dist/jquery',
    '_': '../bower/lodash/dist/lodash'
  },
  packages: [

  ]
});

// require( ["test/test", 'angular'],
//     function() {
//       console.log(angular)
//         //This function will be called when all the dependencies
//         //listed above are loaded. Note that this function could
//         //be called before the page is loaded.
//         //This callback is optional.
//     }
//   );

// Require all the files needed to create our completed app
require([
  '../features/home/routes',
  '../features/home/home'
]);