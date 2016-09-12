/***
CKGS AngularJS App Main Script
***/
/* CKGS App */
var ckgs = angular.module('ckgsPWA',[
  'ui.router',
  'ui.bootstrap',
  'ckgsPWA.constants',
  'ckgsPWA.directives'
]);

ckgs.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    
    $stateProvider
    .state('main',{
      url: "/main",
      templateUrl: "views/mainpage.html"
    })

    .state('home',{
      url: "/home",
      templateUrl: "views/home.html"
    })

    .state('track_application_status',{
      url: "/track_application_status",
      templateUrl: "views/track_application_status.html"
    })

    .state('track-shipping-status',{
      url: "/track-shipping-status",
      templateUrl: "views/track-shipping-status.html"
    })

    .state('faq',{
      url: "/faq",
      templateUrl: "views/faq.html"
    })

    .state('feedback',{
      url: "/feedback",
      templateUrl: "views/feedback.html"
    })

    .state('complaint',{
      url: "/complaint",
      templateUrl: "views/complaints.html"
    })

    .state('privacy-policy',{
      url: "/privacy-policy",
      templateUrl: "views/privacyPolicy.html"
    })

    .state('terms-and-conditions',{
      url: "/terms-and-conditions",
      templateUrl: "views/terms-and-conditions.html"
    })

    .state('holiday-list',{
      url: "/holiday-list",
      templateUrl: "views/holiday-list.html"
    })

    .state('passport-status-history',{
      url: "/passport-status-history",
      templateUrl: "views/passport-status-history.html"
    })

    .state('passport-status-history-received',{
      url: "/passport-status-history-received",
      templateUrl: "views/passport-status-history-received.html"
    })

    .state('ckgs-application-center',{
      url:"/ckgs-application-center",
      templateUrl: "views/ckgs-application-center.html"
    })

    .state('ckgs-application-location-map',{
      url: "/ckgs-application-location-map",
      templateUrl: "views/ckgs-application-location-map.html"
    })


  });

/* Init global settings and run the app */
ckgs.run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.$state = $state; // state to be accessed from view
}]);

ckgs.run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
});