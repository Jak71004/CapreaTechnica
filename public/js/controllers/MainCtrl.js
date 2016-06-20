// public/js/controllers/MaintCtrl.js

(function(){
    var module = angular.module('MainCtrl',[]);
     
    var MainCtrlVar = function($scope){
        $scope.tagline = 'To The Moon!';
    };
    
    MainCtrlVar.$inject = ['$scope'];
    module.controller('MainController', MainCtrlVar);
 }());