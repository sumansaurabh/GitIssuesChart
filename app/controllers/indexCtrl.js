gitIssuesChart.controller('indexCtrl', function ($scope, $rootScope) {
    var urls = {
        reload: '/bower_components/html5-boilerplate/src/404.html',
        main: 'views/main.html'
    }
    $scope.url = urls.main;
});