gitIssuesChart.factory('gitIssuesFactory', function (gitRestangular) {
     return {
     	get: function (owner, repo) {
            return gitRestangular.one(owner+"/"+repo+"/issues?per_page=1000").customGET('',{})
        },
    }
});
