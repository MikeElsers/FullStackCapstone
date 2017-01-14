angular.module('starter')

.constant("base_url", "http://localhost:3000/")


.service ('coreService',['$rootScope','$http', 'base_url',
                function( $rootScope , $http, base_url ){
    
    //--------------------------------------------------
    this.getProducts = function (){
        
        return $http.get(base_url + "products"); 
/* 
  this.products = 
    [
      { producer: 'Sukia', id: 1, product_name_short:'SukaFix 2000', image:'img/prod/1.jpg' },
      { producer: 'Gabarit', id: 2, product_name_short:'GabDrain', image:'img/prod/2.jpg'  },   
      { producer: 'OBII', id: 3, product_name_short:'OBII protection mat', image:'img/prod/3.jpg'  },
      { producer: 'Luxodur', id: 4, product_name_short:'myLux 10', image:'img/prod/4.jpg' },
      { producer: 'Colorme', id: 5, product_name_short:'colorMeFast 99', image:'img/prod/5.jpg' },
      { producer: 'SimpleThings', id: 6, product_name_short:'simpleThing01', image:'img/prod/6.jpg' }
    ];
    
    return this.products;       
*/
               
};
//------------------------  PRODUCT/:ID   -------------------------------    

  this.getProduct = function (index) {
                        return $http.get(base_url+"products/"+index);
                    };


//-----------------------------------------------------------------------           
//------------------------ PROJECT LIST    ------------------------------    

       this.getProjects = function (){
            return $http.get(base_url + "projects");               
       };

//------------------------ PROJECT LIST    ------------------------------    

      this.getProject = function (index) {
            return $http.get(base_url+"projects/"+index);
       };
//------------------------ CURRENT PROJECT    ------------------------------    

       this.getCurrentProject = function (){
        
            return  this.getProject ( $rootScope.current_project_id);
       };
                            
       //------------------------------------------------------------             
       this.currentProjectID = $rootScope.current_project_id;
                    
                    
       //------------------------------------------------------------                             
       this.setCurrentProjectID = function(index){
              console.log ("services: NEW current project: ID =["+index+"]");
              $rootScope.current_project_id = index;
            console.log ("services:  ROOTSCOPE.current_project_id =" + $rootScope.current_project_id);
       };

//-----------------------------------------------------------------------
//----------------------------- Observations ----------------------------
                    
       this.getObservations = function (){
                console.log ("in getObservations ");
            return $http.get(base_url + "observations");               
       };
                    
        this.getObservation = function (index) {
            console.log ("in getObservation ["+index+"]");
            return $http.get(base_url+"observations/"+index);
       };            
                    
                    
                    
} ]);