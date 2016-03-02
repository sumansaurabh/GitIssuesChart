gitIssuesChart.factory('notifyConfig', ['notify', function (notify) {
    notify.config({
        duration: 2000,
        templateUrl: '/bower_components/angular-notify/angular-notify.html'
    });
    return {};
}]);