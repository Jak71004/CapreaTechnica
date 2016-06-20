// public/js/controllers/adminCtrl.js

(function(){
    var module = angular.module('AdminCtrl', []);
    
    var AdminCtrlVar = function(adminSvc, $scope){
        $scope.say = 'stuff';
        $scope.tagline = 'Bitcoin Baby';
        $scope.myChart = {"data": data, "options": {} };
        var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
          {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
          },
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
          }
        ]
      };

        var data2 = {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [5, 19, 7, 15, 200, 8]
                }]
            };

      $scope.data = data;
        $scope.data2 = data2;
        adminSvc.getDailyVoiceUsage().then(function(data){
          $scope.dailyVoiceData = data.data;
        });    
    };
    
    AdminCtrlVar.$inject = ['adminSvc', '$scope'];
    module.controller('AdminController', AdminCtrlVar);
}());
