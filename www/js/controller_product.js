//--------- controller_product.js  ---------------------------  

//--   controller for product
//--   controller for product LIST

angular.module('starter')


 //-----------------------------------------------------------
.controller('ProductListCtrl', 
            ['$rootScope', '$scope', '$http', 'coreService',
            function($rootScope, $scope, $http, coreService ) {
                  
             
  $scope.products = [];
            
  coreService.getProducts() 
             .then(
                function (response){
                    $scope.products = response.data;
                }   
             );
  
/*    
  $scope.products = 
    [
      { producer: 'Suka', id: 1, product_name_short:'SukaFix 2000', image:'img/prod/1.jpg' },
      { producer: 'Gabarit', id: 2, product_name_short:'GabDrain', image:'img/prod/2.jpg'  },   
      { producer: 'OBII', id: 3, product_name_short:'OBII protection mat', image:'img/prod/3.jpg'  },
      { producer: 'Luxodur', id: 4, product_name_short:'myLux 10', image:'img/prod/4.jpg' },
      { producer: 'Colorme', id: 5, product_name_short:'colorMeFast 99', image:'img/prod/5.jpg' },
      { producer: 'SimpleThings', id: 6, product_name_short:'simpleThing01', image:'img/prod/6.jpg' }
    ];
    */
    
}]
)


//-----------------------------------------------------------
.controller('ProductCtrl', ["$rootScope", "$scope", "$http", "$stateParams", 'coreService',
            function( $rootScope, $scope, $http, $stateParams, coreService) {
     
  $scope.product = [];
    
    
/**/              
  coreService.getProduct (  parseInt ( $stateParams.id, 10) )
            .then (
                function (response) {
                      $scope.product = response.data;
                      //$scope.showDis = true;
                });
/**/             
                                
/* 
  $scope.product = 
    
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


}] )
;

//--------------------------------------------------------
                      
                          