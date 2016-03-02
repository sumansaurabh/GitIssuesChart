gitIssuesChart.controller('mainCtrl', function ($scope, $rootScope, gitRestangular, gitIssuesFactory, urlParser, notify, notifyConfig) {

	$scope.overview = false;
	$scope.issues = true;
	$scope.issuesOne = false;
	$scope.issuesOneToSeven = false;
	$scope.issuesSeven = false;

	$scope.disableContainer = false;

	$scope.delay = 0;
    $scope.minDuration = 0;
    $scope.message = 'Fetching...';
    $scope.backdrop = true;
    $scope.promise = null;

    $scope.page = 1;
    $scope.next = function(){
    	$scope.page++;
    }

    $scope.back = function(){
    	$scope.page--;
    }

    $scope.$watch('page', function (oldValue, newValue) {
    	if($scope.locationUrl)
			$scope.getData();
	})
	    
	$scope.getData =  function(){
		console.log($scope.locationUrl)
		$scope.url = urlParser.parse($scope.locationUrl)
		if(!$scope.url){
			notify('Invalid URL')
			return;
		}
		$scope.disableContainer = true;
		$scope.promise = gitIssuesFactory.get($scope.url.owner, $scope.url.repo, $scope.page).then(function (res) {
            
            $rootScope.gitIssuesData = []
            for(var i=0;i<res.length;i++){
            	if(res[i].state == "open"){
	            	$rootScope.gitIssuesData.push({
	            		"title": res[i].title,
	            		"created_at": res[i].created_at,
	            		"updated_at": res[i].updated_at,
	            		"url": res[i].url,
	            		"user":{
	            			"login": res[i].user.login,
	            			"avatar_url": res[i].user.avatar_url,
	            			"html_url": res[i].user.html_url,
	            		}
	            	})
	            }
            }
            
            console.log($rootScope.gitIssuesData)
            
        },function (err) {
            notify('Unable to Fetch Data from Git Issues')
        });
	}

	$scope.setOverView = function(){
		$scope.overview = true;
		$scope.issues = false;
		$scope.issuesOne = false;
		$scope.issuesOneToSeven = false;
		$scope.issuesSeven = false;
	}

	$scope.setIssues = function(){
		$scope.overview = false;
		$scope.issues = true;
		$scope.issuesOne = false;
		$scope.issuesOneToSeven = false;
		$scope.issuesSeven = false;
	}

	$scope.setIssuesOne = function(){
		$scope.overview = false;
		$scope.issues = false;
		$scope.issuesOne = true;
		$scope.issuesOneToSeven = false;
		$scope.issuesSeven = false;
	}

	$scope.setIssuesOneToSeven = function(){
		$scope.overview = false;
		$scope.issues = false;
		$scope.issuesOne = false;
		$scope.issuesOneToSeven = true;
		$scope.issuesSeven = false;
	}

	$scope.setIssuesSeven = function(){
		$scope.overview = false;
		$scope.issues = false;
		$scope.issuesOne = false;
		$scope.issuesOneToSeven = false;
		$scope.issuesSeven = true;	
	}
})