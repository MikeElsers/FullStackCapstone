//--------- controller_product.js  ---------------------------  

//--   controller for product
//--   controller for product LIST

angular.module('starter.controllers')


 //-----------------------------------------------------------
.controller('ProductListCtrl', 
            ["$rootScope", "$scope","$http",
            function($rootScope, $scope, $http ) {
     
  $scope.products = [];
    
    //core_data_factory.getProducts()
    
    $http.get( $rootScope.base_url + "products/") 
    
                     .then (
            function (response){
                $scope.products = response.data;
                $scope.showProducts = true;
            }       
    );
   
    /*
  $scope.products = 
    [
      { firma: 'Suka', id: 1, productname:'SukaFix 2000', img:'img/prod/1.jpg' },
      { firma: 'Gabarit', id: 2, productname:'GabDrain', img:'img/prod/2.jpg'  },   
      { firma: 'OBII', id: 3, productname:'OBII protection mat', img:'img/prod/3.jpg'  },
      { firma: 'Luxodur', id: 4, productname:'myLux 10', img:'img/prod/4.jpg' },
      { firma: 'Colorme', id: 5, productname:'colorMeFast 99', img:'img/prod/5.jpg' },
      { firma: 'SimpleThings', id: 6, productname:'simpleThing01', img:'img/prod/6.jpg' }
    ];
    */
    
}]
)


//-----------------------------------------------------------
.controller('ProductCtrl', ["$rootScope", "$scope","$http", "$stateParams",
            function( $rootScope, $scope, $http, $stateParams) {
     
  $scope.product = [];
     
  $http.get( $rootScope.base_url + "products/"+$stateParams.id)
    
                     .then (
            function (response){
                $scope.product = response.data;
            }       
    );            

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


;   
//--------------------------------------------------------
                      
                          