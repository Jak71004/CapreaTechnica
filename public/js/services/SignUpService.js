//public/js/services/SignUpService.js
angular.module('SignUpService', []).factory('signUpSvc', ['$http', function($http){
    return {
        //createSubAccount
        createSubAccount : function() {
            return $http.get('http://localhost:8080/api/account/createSubAccount');
        },
        //getPhoneNumbers
        
    }
}]);