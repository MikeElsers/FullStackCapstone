//--------- controller_project.js  ---------------------------  

//--   controller for project
//--   controller for project LIST

angular.module('starter')


 //-----------------------------------------------------------
.controller('ProjectListCtrl', 
            ['$rootScope', '$scope','$http','coreService',
            function($rootScope, $scope, $http, coreService
                     ) {
     
  $scope.projects = [];
                
    
  coreService.getProjects() 
     .then(
          function (response){
                  $scope.projects = response.data;
              
              }
     );
                
                
    /* 
  $scope.projects = 
    [
      {
        "id":"1",
        "project_identifier_short":"STATIC STATIC TEST-1, Appartment, NY",
        "project_identifier_long":"STATIC STATIC TEST-1: Decorating an appartment, NY City, 42th/9th",
        "address_street":"42th & 9th",
        "address_town":"NY",
        "address_postal_code":"12345",
        "contact_name":"Anton Allmaker",
        "contact_phone":"(+1) 112 334 556",
        "contact_freetext":"Standard decoration, needs a lot of color on the walls.",
        "inserted_at_date":"",
        "inserted_by_user":""

      },
      {
        "id":"2",
        "project_identifier_short":"STATIC STATIC TEST-2, flat, LA, artist",
        "project_identifier_long":"STATIC STATIC TEST-2, flat of artist Joe Duff, only ecological stuff to use",
        "address_street":"Hollywood Bvd 331",
        "address_town":"Los Angeles",
        "address_postal_code":"99999",
        "contact_name":"J. Duff (owner)",
        "contact_phone":"(+1) 99 99 99 999",
        "contact_freetext":"Wants new floor (carpet): use ecoGlue, wall paints: all red",
        "inserted_at_date":"",
        "inserted_by_user":""
      },
      {
        "id":"3",
        "project_identifier_short":"STATIC STATIC TEST-3, house, exterior, Paris",
        "project_identifier_long":"STATIC STATIC Anti-rain coating for house in Paris",
        "address_street":"Champs Elysee, 132a",
        "address_town":"Paris",
        "address_postal_code":"111",
        "contact_name":"Monsieur Win",
        "contact_phone":"(+39) 91.91.91.91",
        "contact_freetext":"no comment",
        "inserted_at_date":"",
        "inserted_by_user":""
      },
      {
        "id":"4",
        "project_identifier_short":"TEST-4, appartment, London",
        "project_identifier_long":"TEST-4: Walls in living room, London",
        "address_street":"Heathrow square, 94/4",
        "address_town":"London",
        "address_postal_code":"2DH 14A",
        "contact_name":"Mrs. Leicester",
        "contact_phone":"(+39) 39393939",
        "contact_freetext":"Huge living room: removing all color (ceiling, walls), then paint it blue.",
        "inserted_at_date":"",
        "inserted_by_user":""

      }
  ];
/**/
    
}])


//-----------------------------------------------------------
.controller('ProjectCtrl', ["$rootScope", "$scope","$http", "$stateParams",'coreService',
            function( $rootScope, $scope, $http, $stateParams, coreService) {
     
  $scope.project = [];
         
  /**/              
  coreService.getProject (  parseInt ( $stateParams.id, 10) )
            .then (
                function (response) {
                      $scope.project = response.data;
                      //$scope.showDis = true;
                });
/**/      
 
   //------------------------------------------------            
   $scope.setCurrentProjectID =  function (index){  
         coreService.setCurrentProjectID(index);       
   }                          
   
   //------------------------------------------------            

   $scope.getCurrentProjectID = function (){
          return $rootScope.current_project_id;
   };            
   
   //------------------------------------------------            
   $scope.getCurrentProject =  function (){
       
        coreService.getCurrentProject()
            .then(
               function(response){
                        $scope.current_project_id = response.data;
               }
        );
   };
   //------------------------------------------------            

   
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
                      
                          