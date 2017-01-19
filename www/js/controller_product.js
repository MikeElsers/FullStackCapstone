//--------- controller_product.js  ---------------------------  

//--   controller for product
//--   controller for product LIST

angular.module('starter')


 //-----------------------------------------------------------
.controller('ProductListCtrl', 
                 ['$rootScope', '$scope', '$http',  "$stateParams", 'coreService',
            function($rootScope, $scope,   $http,    $stateParams,   coreService ) {
  
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
  
                
 $scope.product = [];  
                
 coreService.getProduct (  parseInt ( $stateParams.id, 10) )
            .then (
                function (response) {
                      $scope.product = response.data;
                      //$scope.showDis = true;
                });                
                
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
                
      //----------  HELPER TEXTS for FILTER function -----------------------------   
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
                       
}] )

;
//--------------------   E O F      ------------------------------------
                      
                          