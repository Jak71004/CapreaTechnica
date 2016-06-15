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
/*

<canvas value="myChart" type="line" width="0" height="0" style="width: 0px; height: 0px;"></canvas>

angular.module('AdminCtrl')
.directive('adminDirective', function(){
     return {
         restrict: 'E',
         template: '<canvas></canvas>',
         scope:{
             chartObject: '=value'
         },
         link: function (scope, element, attrs) {
        var canvas, context, chart, options, data;
        var init = function(type){
          element.empty();
          element.append('<canvas></canvas>');

          canvas  = element.find("canvas")[0];
          context = canvas.getContext("2d");

          
          canvas.height = 600;
          canvas.width = 800;
         data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: ["0","3", '13', '15', '2', '010']
            }]
};
            options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            };
          chart = new Chart(context, {
              type: 'line',
              data:  data,
              options:options
          });
        };
             
        init(attrs.type);

        scope.$watch(function(){ return element.attr('type'); }, function(value){
          if (!value) return;
          init(value);
          var chartType = 'Line'; //options.type;
          if(typeof scope.chartObject !== 'undefined'){
            chart[chartType]({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: ["0","3", '13', '15', '2', '010']
            }]
}, {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            });
          }
          chart[chartType]({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: ["0","3", '13', '15', '2', '010']
            }]
}, {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            });
        });

        //Update when charts data changes
        scope.$watch(function() { return scope.chartObject; }, function(value) {
          if (!value) return;
          var chartType = options.type;
          chart[chartType](scope.chartObject.data, scope.chartObject.options);
          if (scope.chartInstance) scope.chartInstance.destroy();
          scope.chartInstance = chart[chartType](scope.chartObject.data, scope.chartObject.options);
        }, true);
      }
     }
     
});
    
*/
