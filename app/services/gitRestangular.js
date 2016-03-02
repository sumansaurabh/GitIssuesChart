gitIssuesChart.factory('gitRestangular', ['Restangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl("https://api.github.com/repos/");
        RestangularConfigurer.setDefaultHttpFields({
            timeout: 15000
        });
    });
}]);