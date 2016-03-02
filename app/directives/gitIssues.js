gitIssuesChart.directive('gitIssues', function($rootScope){
	return {
	    restrict: 'E',
	    templateUrl: '/views/issues.html',
	    link: function (scope, element, attrs) {
	    	console.log($rootScope.gitIssuesData)
	    	scope.gitIssues = $rootScope.gitIssuesData;
	    }

	}
})