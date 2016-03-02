gitIssuesChart.factory('urlParser', function (gitRestangular) {
     return {
        parse: function (url) {
            url = url.split("/")
            if(url.length <5)
                return 0;
            return {
                "owner": url[3],
                "repo": url[4]
            }
        },
    }
});
