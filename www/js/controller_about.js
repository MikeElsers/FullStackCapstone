//--------- controller_about.js  ---------------------------  


angular.module('starter.controllers', [])



//-----------------------------------------------------------
//--  used in about.html page (technical + orga information)

.controller('AboutController', function($scope) {

    /**  INIT **/
    $scope.showAbout_organsational = true;
    $scope.showAbout_technical     = false;
    
    
    /**/
     $scope.setAboutOrganisational = 
       function(){
         $scope.showAbout_technical = false;
         $scope.showAbout_organsational = true;
    }
     
     $scope.setAboutTechnical = 
       function(){
         $scope.showAbout_technical = true;
         $scope.showAbout_organsational = false;
    }
    

    /**/
    
})   //--------------------------------------------------------
