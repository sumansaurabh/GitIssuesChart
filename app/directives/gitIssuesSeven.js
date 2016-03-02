gitIssuesChart.directive('gitIssuesSeven', function($rootScope){
	return {
	    restrict: 'E',
	    templateUrl: '/views/issues.html',
	    link: function (scope, element, attrs) {
	    	var validateDate = function(date){
	    		var d = new Date(date);
	    		var currentDate =  new Date();
	    		if((currentDate.getTime()-d.getTime())>7*86400000)
	    			return true;
	    	}
	    	scope.gitIssues = []
	    	for(var i=0;i<$rootScope.gitIssuesData.length;i++){
	    		if(validateDate($rootScope.gitIssuesData[i].created_at)){
	    			scope.gitIssues.push($rootScope.gitIssuesData[i])
	    		}
	    	}
	    }

	}
})