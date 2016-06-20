// public/js/services/NerdService.js
//DESCRIPTION: Where you would use $http or $resources to do your api calls to the node backend

(function(){
    var AdminFactoryVar = function($http){
        return {
            // call to get all nerds
            getDailyVoiceUsage : function() {
                return $http.get('http://localhost:8080/api/usage/voice');
            }
        } 
    };
    
    angular.module('AdminService', []).factory('adminSvc', ['$http', AdminFactoryVar]);
    
}());