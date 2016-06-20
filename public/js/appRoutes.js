// public/js/appRoutes.js
(function(){
    angular.module('appRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        //home page
        .when('/', {
            templateUrl: './../views/home.html',
            controller: 'MainController'
        })
        .when('/AdminHome', {
            templateUrl: './../views/AdminHome.html',
            controller: 'AdminController'
        })
        .when('/SignUp', {
            templateUrl: './../views/signUp.html',
            //controller: 'SignUpController'
        });

        $locationProvider.html5Mode(true);

    }]);
}());
