angular.module('starter',)

.constant("base_url", "http://localhost:3000")


.service ('core_data_factory',['$http','base_url',
                      function( $http,  base_url){
    
    //--------------------------------------------------
    this.getProducts = function (){
        
        return  $http.get( base_url + "products");  
    };
    
    //----------------
    this.getProduct =  function (index){
        return  $http.get( base_url + "products/"+index);
    }
    
    //-----------------
    
}]);