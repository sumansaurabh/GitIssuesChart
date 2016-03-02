gitIssuesChart.controller('mainCtrl', function ($scope, $rootScope, gitRestangular, gitIssuesFactory, urlParser) {

	$scope.getData =  function(){
		console.log($scope.locationUrl)
		
		var url = urlParser.parse($scope.locationUrl)
		
		gitIssuesFactory.get(url.owner, url.repo).then(function (res) {
            console.log('Internal Material Added')
            console.log(res.length)
        },function (err) {
            console.log('unable to save, check inputs and try again')
        });
	}
})