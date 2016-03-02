gitIssuesChart.factory('gitIssuesFactory', function (gitRestangular) {
     return {
     	get: function (owner, repo, pageno) {
     		var loc = owner+"/"+repo+"/issues?page="+pageno+"&per_page=100";
            return gitRestangular.one(loc).customGET('',{})
        },
    }
});
