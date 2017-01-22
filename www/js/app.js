// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllng-click="setAboutTechnical"ers' is found in controllers.js
//-- **************************************************************** --//
angular.module('starter', ['ionic', 'ngCordova'])

//--------------------------------------
.run(function($ionicPlatform, $rootScope, $ionicLoading, $cordovaSplashscreen, $timeout) {
    
//  $rootScope.base_url = "http://localhost:3000/";  
  $rootScope.base_url = "http://192.168.0.15:3000/";  
    
  //--  variable that holds 
  $rootScope.current_project_id     = 0 ; 
    
  $rootScope.current_observation_id = 0;
    
    
  $ionicPlatform.ready(function() 
  {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs) 
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }      
      
      
/*    $timeout(function(){
                $cordovaSplashscreen.hide();
      },4000);
*/
      
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    
    //-- ********************************************************** 
    //-- *****************  OBSERVATION  ************************** 
    //-------------------------------------------------------------
    .state('app.observationlist', {
      url: '/observationlist',
      views: {
        'menuContent': {
            templateUrl: 'templates/observationlist.html',
            controller: 'ObservationController'
        }
      }
    })

      //-------------------------------------------------------------
    .state('app.observation', {
      url: '/observation/:id',
      views: {
        'menuContent': {
              templateUrl: 'templates/observation.html',
              controller: 'ObservationController'
        }
      }
    })
  
  
  
  
  //-- ********************************************************** 
  //-- *****************  PROJECT  **************************
     //-------------------------------------------------------------
  .state('app.projectlist', {
     url: '/projectlist',
       views: {
         'menuContent': {
            templateUrl: 'templates/projectlist.html',
            controller: 'ProjectListCtrl'
         }
       }
     })

    //-------------------------------------------------------------
    .state('app.project', {
      url: '/project/:id',
      views: {
        'menuContent': {
              templateUrl: 'templates/project.html',
              controller: 'ProjectCtrl'
        }
      }
    })
   

  
  
  //-- ********************************************************** 
  //-- *****************  PRODUCT  ******************************
  
  //-------------------------------------------------------------
    .state('app.productlist', {
      url: '/productlist',
      views: {
        'menuContent': {
              templateUrl: 'templates/productlist.html',
              controller: 'ProductListCtrl'
        }
      }
    })

    //-------------------------------------------------------------
    .state('app.product', {
      url: '/product/:id',
      views: {
        'menuContent': {
              templateUrl: 'templates/product.html',
              controller: 'ProductListCtrl'
        }
      }
    })
  
   //-------------------------------------------------------------
   .state('app.filter', {
      url: '/filter',
      views: {
        'menuContent': {
          templateUrl: 'templates/filter.html',
          controller: 'ProductListCtrl'
        }
      }
    })
  
  
  //-- ********************************************************** 
  //-- *****************  VARRIOUS PAGES************************* 
  
  //-------------------------------------------------------------
  
   .state ('app.about', {
      
      url: '/about',
      views: {
         'menuContent': {
             templateUrl: 'templates/about.html',
             controller: 'AboutController'
         }
      }
  })
  
   //-------------------------------------------------------------
  
   .state ('app.page404', {
      
      url: '/page404',
      views: {
         'menuContent': {
             templateUrl: 'templates/page404.html',
             controller: 'AboutController'
         }
      }
  })
;
    
    
  // if none of the above states are matched, use this as the fallback
//    $urlRouterProvider.otherwise('/app/productlist');
    $urlRouterProvider.otherwise('/app/about');
    
});
