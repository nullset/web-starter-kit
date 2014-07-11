requirejs.config({
    baseUrl: '../../features',
    paths: {
        // bower: '../bower'
    }
});

require(['app']);


// requirejs({
//     paths: {
//       'jQuery': '../../bower/jquery/dist/jquery.js',
//       'angular': '../../bower/angular/angular.js',
//       'ui-router': '../../bower/angular-ui-router/release/angular-ui-router.js'

//         // 'text': '../lib/require/text',
//         // 'durandal': '../lib/durandal/js',
//         // 'plugins': '../lib/durandal/js/plugins',
//         // 'transitions': '../lib/durandal/js/transitions',
//         // 'knockout': '../lib/knockout/knockout-2.3.0',
//         // 'jquery': '../lib/jquery/jquery-1.9.1',
//         // 'jquery.bootstrap': '../lib/bootstrap/bootstrap.min',
//         // 'pubsub': '../app-lib/pubsub',
//         // 'stringify': '../app-lib/stringify',
//         // 'uuid': '../app-lib/uuid',
//         // 'gwt-logging-adapter': '../app-lib/gwt-logging-adapter',
//         // 'loggingservice': '../app-lib/loggingservice',
//         // 'g2-console': '../app-lib/g2-console',
//         // 'g2m': '../app-lib/g2m',
//         // 'g2m-core': '../app-lib/g2m-core',
//         // 'g2m-audio': '../app-lib/g2m-audio',
//         // 'g2m-attendeelist': '../app-lib/g2m-attendeelist',
//         // 'rtc': '../app-lib/rtc-0.4',
//         // 'jquery.fn.fullscreen': '../app-lib/jquery.fn.fullscreen',
//         // 'detector': '../app-lib/detector',
//         // 'emoji': '../lib/emoji/emoji',
//         // 'knockout.binders': '../app-lib/binders',
//         // 'knockout.persist': '../lib/knockout/knockout.persist',
//         // 'knockout.validation': '../lib/knockout/knockout.validation',
//         // 'marked': '../lib/marked/marked',
//         // 'richTextRenderer': '../app-lib/richTextRenderer',
//         // 'underscore': '../lib/lodash/lodash.min',
//         // 'GoToMeeting': '../app-lib/GoToMeeting', // Placeholder to allow the 'GoToMeeting' shim to resolve
//         // 'nativeEpServices': '../app-lib/nativeEpServices',
//         // 'CallBuffer': '../app-lib/CallBuffer',
//         // 'gotoconfig': '../app-lib/gotoconfig',
//         // 'notify': '../lib/notify',
//         // 'typeahead': '../lib/typeahead/typeahead',
//         // 'countries': '../app-lib/countries',
//         // 'tagmanager': '../lib/analytics/tagmanager',
//         // 'bloodhound': '../app-lib/bloodhound',
//         // 'chrome-desktop-capture': '../app-lib/chrome-desktop-capture', // Directory for all the Chrome desktop capture modules
//         // 'pollWaitTill': '../app-lib/pollWaitTill'
//     },
//     shim: {
//         // 'jquery.bootstrap': { deps: ['jquery'], exports: 'jQuery.fn.emulateTransitionEnd' },
//         // 'knockout.validation': { deps: ['knockout'] },
//         // 'GoToMeeting': {exports: 'Factory'}, // 'Factory' is visible in the global scope - see the page HEAD <script> for com.citrixonline.gotomeeting.GoToMeeting.nocache.js
//         // 'notify': { deps: ['jquery'], exports: 'notify' },
//         // 'typeahead': { deps: ['jquery'], exports: 'typeahead' },
//         // 'bloodhound': { deps: ['typeahead'], exports: 'bloodhound' }

//         jQuery: {
//           exports: '$'
//         },
//         angular: {
//           deps: ['jQuery']
//           exports: 'angular'
//         },
//         uiRouter: {
//           deps: ["angular"]
//         }
//     }
// })


