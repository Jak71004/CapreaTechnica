// public/js/services/NerdService.js
//DESCRIPTION: Where you would use $http or $resources to do your api calls to the node backend
angular.module('AdminService', []).factory('adminSvc', ['$http', function($http) {

    return {
        // call to get all nerds
        getDailyVoiceUsage : function() {
            return $http.get('http://localhost:8080/api/usage/voice');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

}]);