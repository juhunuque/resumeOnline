var app = angular.module('resumeApp',['toastr']);



app.controller('ResumeCtrl',['$scope','$http','toastr',function($scope,$http,toastr){
    console.log("ResumeCtrl Init");
    $scope.isSpanish = false;
    $scope.lang = [];
    
    function refreshData(){
        if($scope.isSpanish){
            //GET SPANISH VERSION
            $http.get('./json/es_Us.json').then(function(response){
                $scope.lang = response.data;
              });
        }
        else{
            //GET ENGLISH VERSION
            $http.get('./json/en_Us.json').then(function(response){
                $scope.lang = response.data;
              });
        }
        
    };
    
    refreshData();

    $scope.toggleLang = function(option){
        $scope.isSpanish = option;
        refreshData();
        if($scope.isSpanish){
           toastr.success("Version en Español!"); 
        }else{
            toastr.success("English Version!");
        }
        
    };

}]);

