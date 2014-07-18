require.config({
  // baseUrl: '.',
  paths: {
    'angular': '../bower/angular/angular',
    'angular-strap': '../bower/angular-strap/dist/angular-strap.min',
    'angular-strap.tpl': '../bower/angular-strap/dist/angular-strap.tpl.min',
    'ui.router': '../bower/angular-ui-router/release/angular-ui-router',
    // 'requirejs': '../bower/requirejs/require',
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

  ],
  // dir: '../../deploy'    // path is relative to THIS file
  // deps: ['angular'],
  // callback: function() {
  //   console.log('---> angular is loaded', angular)
  //   angular.element().ready(function() {
  //     alert(3)
  //     angular.resumeBootstrap([app.name]);
  //   });
  // }
  // bundles: {
  //   'primary': ['main', 'util', 'text', 'text!template.html']
  // }

});

// requirejs(['scripts/app.js', 'features/home/routes.js', 'features/home/home.js', 'features']);

// Require all the files needed to create our completed app
// requirejs([
//   'app',
//   '../features/home/routes',
//   '../features/home/routes',
//   '../features/home/home',
//   '../features/home/join-form',
//   '../features/meeting-service/meeting-service',
//   '../features/meeting/routes',
//   '../features/meeting/meeting',
// ]);

