//--------- controller_observation.js  ---------------------------  

//--   controller for observation
//--   controller for observation LIST

angular.module('starter')


 //-----------------------------------------------------------
.controller('ObservationController', 
            ['$rootScope', '$scope','$http','coreService', "$stateParams",
            function($rootScope, $scope, $http, coreService, $stateParams
                     ) 
   {

      //--------------  VARS ---------------------------------------         
       $scope.observations = [];
    
       $scope.observation = [];
    
       $scope.current_project = 0;
       $scope.current_product = 0;

       
    //----------------  METHODS / ... -----------------------------
/**/
       
  coreService.getObservations() 
     .then(
          function (response){
                  $scope.observations = response.data;
              
              }
     );
       
/**/                   
/*                 
  $scope.observations = 
    [
      { 
        "id":"1",
        "product":"1",
        "project":"1",
        "comment":"TEST-Obs-01:  bla bla bla",
        "recorded_by_user":"1",
        "recorded_at":"2017-01-17"
      },
      {
        "id":"2",
        "product":"2",
        "project":"3",
        "comment":"TEST-Obs-02:  product_2  and project_3",
        "recorded_by_user":"2",
        "recorded_at":"2017-01-10"
      },
      {
        "id":"3",
        "product":"2",
        "project":"1",
        "comment":"TEST-Obs-03:  product_2  and project_1",
        "recorded_by_user":"2",
        "recorded_at":"2017-01-11"
      },
      {
        "id":"4",
        "product":"3",
        "project":"4",
        "comment":"TEST-Obs-04:  product_3  and project_4",
        "recorded_by_user":"3",
        "recorded_at":"2017-01-13"
      }
  ];
/**/
    

  
               
  coreService.getObservation (  parseInt ( $stateParams.id, 10) )
            .then (
                function (response) {
                       console.log(" in getObservation");
                      $scope.observation = response.data;
                      
                      coreService.getProduct ($scope.observation.product) //$scope.observation.product)
                      .then (
                            function (response){
                                    console.log ("setting the product in obs");
                                    $scope.obs_product = response.data;
                            });  
                    
                      coreService.getProject($scope.observation.project)
                      .then ( function(response){
                          $scope.obs_project  = response.data;
                          console.log ("setting the PROJECT, id=["+$scope.obs_project.id+"]"); 
                      });
                     
            });   
   
    //-------------------------------------------------------------------------    
   
    $scope.submitContent =  function (){
        
        
        
        console.log(" submitContent (..) called ---NOT WORKING =========== "); 
    };    
       
   
/*
   //------------------------------------------------            
   $scope.setCurrentObservationID =  function (index){  
         coreService.setCurrentObservationID(index);       
   }                          
   
   //------------------------------------------------            

   $scope.getCurrentObservationID = function (){
          return $rootScope.current_observation_id;
   };            
   
   //------------------------------------------------            
   $scope.getCurrentObservation =  function (){
       
        coreService.getCurrentObservation(current_observation_id)
            .then(
               function(response){
                        $scope.current_observation = response.data;
               }
        );
   };
   //------------------------------------------------            
*/
   
/* 
  $scope.project = 
    
      {
         "id":"3",
         "product_name_short":"Test-3: SillyKuun, 300ml",
         "product_name_long":"Test-3: awesome silicone product: SillyKuun, 0.3 l package",
         "producer":"NP - NewProducts, Inc.",
         "image":"img/prod/3.jpg",
         "description":"This is the awesome silicone product for bath and kitchen to fill any joints.",
         "scope_of_application":"tile walls in bath / kitchen ",
         "resources":"",
         "additional_explanations":"***additional explanations about the product ***",
         "keywords":"",
         "quality_1":"yes",
         "quality_2":"yes",
         "quality_3":"yes",
         "quality_4":"no",
         "quality_levels":"",
         "inserted_at_date":"2017-01-05",
         "inserted_by_user":"CE"
      }
*/    


}]);


//--------------------------------------------------------
                      
                          