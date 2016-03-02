gitIssuesChart.factory('urlParser', function (gitRestangular) {
     return {
     	parse: function (url) {
     		
            url = url.split("/")
            console.log(url)
            return {
            	"owner": url[3],
            	"repo": url[4]
        	}
        },
    }
});
