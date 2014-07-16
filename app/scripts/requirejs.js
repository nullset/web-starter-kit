require.config({
  paths: {
    'angular': '../bower/angular/angular',
    'angular-strap': '../bower/angular-strap/dist/angular-strap.min',
    'angular-strap.tpl': '../bower/angular-strap/dist/angular-strap.tpl.min',
    'ui.router': '../bower/angular-ui-router/release/angular-ui-router',
    'requirejs': '../bower/requirejs/require',
    'jquery': '../bower/jquery/dist/jquery',
    '_': '../bower/lodash/dist/lodash'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'ui.router': {
      deps: [
        'angular'
      ]
    }
  },
  packages: [

  ]
});


// Require all the files needed to create our completed app
require([
  '../features/home/routes',
  '../features/home/home',
  '../features/home/join-form',
  '../features/meeting-service/meeting-service',
  '../features/meeting/routes',
  '../features/meeting/meeting',
]);