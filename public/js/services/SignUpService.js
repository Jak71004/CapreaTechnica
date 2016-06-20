//public/js/services/SignUpService.js
(function(){
    var signUpFactoryVar = function($http){
        return {
            //createSubAccount
            createSubAccount : function() {
                return $http.get('http://localhost:8080/api/account/createSubAccount');
            },
            //getPhoneNumbers

        }
    };
    
    angular.module('SignUpService', []).factory('signUpSvc', ['$http', signUpFactoryVar]);
    
}());
