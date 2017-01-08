angular.module('starter.controllers', [])

 //-----------------------------------------------------------
.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //-- *************************   ROOTSCOPE   ***************************
    
  //-- **************************   General    *****************************
    
  $scope.general_app_version_number =  "0.1";      //--  *** App Version ***    
    
  $scope.creation_date              =  new Date(Date.parse("2017-01-05")).toDateString();  //--  *** creation date of APP
    
    
  //-- **********************  ATTIC    ***********************************
    
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
     console.log('Doing login', $scope.loginData);

      
     // Simulate a login delay. Remove this and replace with your login
     // code if using a login system
     $timeout(function() {
         $scope.closeLogin();
     }, 1000);
   };
})

;


