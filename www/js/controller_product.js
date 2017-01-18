//--------- controller_product.js  ---------------------------  

//--   controller for product
//--   controller for product LIST

angular.module('starter')


 //-----------------------------------------------------------
.controller('ProductListCtrl', 
            ['$rootScope', '$scope', '$http', 'coreService',
            function($rootScope, $scope, $http, coreService ) {
  
  $scope.products = [];
 
  
               
                
 //---------------- FILTER --------------------------------
                 
  $rootScope.myfilter= { "txt1":"", "txt2":"", "txt3":""};    
  
                
  $rootScope.$watch( '[myfilter.txt1,myfilter.txt2,myfilter.txt3]',
                     function(){
       $rootScope.filterTerms = ("[  "+$rootScope.myfilter.txt1+"  /  "+
                                $rootScope.myfilter.txt2+"  /  "+
                                $rootScope.myfilter.txt3+"  ]"); 
  },true);              
      
                
  $rootScope.$watch('filterTerms', function(){
      
            console.log(" Length is ["+$rootScope.myfilter.txt1.length+"]");
            $rootScope.filterIsSet =  ($rootScope.filterTerms.length > 16) 

            console.log (" filterIsSet = ["+$rootScope.filterIsSet+"]");
  })            
  
      
                
  //------------------ General Product List--------------------------------                
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
  
    //---------------  FILTER EXPLANATIONS --------------------
              
        $scope.toggleVisibility = function (id) {
            
                //console.log (" myfunction found !");
                var x = document.getElementById(id);
            
                if (x.className.indexOf("w3-show") == -1) {
                        x.className += " w3-show";
                } else { 
                        x.className = x.className.replace(" w3-show", "");
                }
        }             
                
                
      $scope.filterComments =[
/**/    
        {name:"General usage", 
         comment:'Type in characters (without quotes,  case-INsensitive) to filter for those terms; Example:  [   tool   ] -> keeps only those products that contain the term tool anywhere in all parts.'
        } ,
        {
            name:"Negating expressions",
            comment:" Negation of a term:  -> [    ! tool  ]  ->  keeps only those products that do NOT contain  'tool'." 
        },
        {
            name:"Quick filter",
            comment:" ... also named: Filter 1;  ... is the same filter as on the top of the  productList page.  Filter 2 and 3 are accessible only here !" 
        },
        {
            name:"Setting multiple filters",
            comment:"All filters are chained by 'AND'" 
        } 
      ];
          
      //-------------------------------------------------
                
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
                      
                          