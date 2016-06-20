// public/js/controllers/SignUpCtrl.js

(function(){
    var module = angular.module('SignUpCtrl',[]);
    
    var SignUpCtrlVar = function(signUpSvc, $scope){
        
        $scope.SignUp = function(school){
            //Probably want to nest the ".THEN" 
            //save the schools data to db
            function(school){};

            //create subaccount friendly name is school's unique name
            signUpSvc.createSubAccount().then(function(data){
                $scope.school.SSID = data.data.ssid;
            });
            //Get list of phone numbers
            signUpSvc.getPhoneNumbers().then(function(data){
                $scope.phoneNumberOptions = data.data.NumberList;
            });
        };
    
        $scope.UpdatePhoneNumber = function(school, phoneNumber){
            //update the schools data in db
        };
    };
    
    SignUpCtrlVar.$inject = ['signUpSvc', '$scope'];
    module.controller('SignUpController', SignUpCtrlVar);
    
}());
