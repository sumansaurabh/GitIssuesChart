gitIssuesChart.directive('gitIssues', function($rootScope, $compile){
	return {
	    restrict: 'E',
	    templateUrl: '/views/issues.html',
	    link: function (scope, element, attrs) {
	    	$rootScope.$watch('gitIssuesData', function (oldValue, newValue) {
	    		console.log($rootScope.gitIssuesData)
	    		scope.gitIssues = $rootScope.gitIssuesData;
	    	})
	    }

	}
})