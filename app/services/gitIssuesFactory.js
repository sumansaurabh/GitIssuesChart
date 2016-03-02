gitIssuesChart.factory('gitIssuesFactory', function (gitRestangular) {
     return {
     	get: function (owner, repo) {
            return gitRestangular.one(owner+"/"+repo+"/issues").customGET('',{})
        },
    }
});
