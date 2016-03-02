gitIssuesChart.controller('mainCtrl', function ($scope, $rootScope, gitRestangular, gitIssuesFactory, urlParser, notify, notifyConfig) {

	$scope.getData =  function(){
		console.log($scope.locationUrl)
		var url = urlParser.parse($scope.locationUrl)
		gitIssuesFactory.get(url.owner, url.repo).then(function (res) {
            console.log(res.length)
        },function (err) {
            notify('Unable to Fetch Data from Git Issues')
        });
	}
})