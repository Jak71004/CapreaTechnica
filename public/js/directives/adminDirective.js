(function(){
    var link = function(){
        return {
            restrict: 'A',
            scope: {
                canvasID: '@id',
                myData: '=data'
            },
            template: '<canvas id="myChart" type="line" width="800" height="600" style="width: 800px; height: 600px;" ></canvas>',
            link: function(scope, elem, attrs){
                
                var context, chart, options, data;
                data = {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: ["100","3", '13', '15', '2', '010']
                    }]
                };
                options = {
                    height: 320,
                    width: 333
                };
                console.log(scope.canvasID);
                context = document.getElementById(scope.canvasID);
                chart = new Chart(context,{
                  type: 'line',
                  data: scope.myData,
                  options: options
                });
                
            }
        };
    };
    
    angular.module('AdminCtrl')
        .directive('adminDirective', link);
}());