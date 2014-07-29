module.exports = function(router, request) {
    // Router will handle any requests with this endpoint depending on where router is "use()'d.
    router.get('/helloworld', function(req, res) {
        // Returns a JSON response when user visits this endpoint
        var url = 'http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/PIT/iphone/clubroster.json';
        request(url, function(error, response, body){
            if(!error && response.statusCode === 200){
                res.send(body);
            }
        });
    });

    router.get('/issues', function(req, res) {
        request({
            url: 'https://api.github.com/repos/' + req.query.ownerName + '/' + req.query.repoName + '/issues?state=all',
            headers: { 'user-agent': 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var issueTitles = [];
                for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
                    if(!body[issueIndex].pull_request) {
                        issueTitles.push(body[issueIndex].title);
                    }
                }
                res.send(issueTitles);
            }
        });
    });

    router.get('/issues_opened', function(req, res) {
        request({
            url: 'https://api.github.com/repos/' + req.query.ownerName + '/' + req.query.repoName + '/contributors',
            headers: { 'user-agent': 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var contributors = [];
                for(var contributorIndex = 0; contributorIndex < body.length; contributorIndex++){
                    contributors.push(body[contributorIndex].login);
                }

                var contributorIssuesOpened = [];
                for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                    contributorIssuesOpened.push({
                        'name': contributors[contributorIndex],
                        'issues_opened': 0
                    });
                }

                request({
                    url: 'https://api.github.com/repos/' + req.query.ownerName + '/' + req.query.repoName + '/issues?state=all',
                    headers: { 'user-agent': 'git-technetium' },
                    json: true
                }, function(error, response, body) {
                    if(!error && response.statusCode === 200) {
                        for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
                            if(!body[issueIndex].pull_request) {
                                for(var contributorIndex = 0; contributorIndex < contributorIssuesOpened.length; contributorIndex++) {
                                    if(body[issueIndex].user.login === contributorIssuesOpened[contributorIndex].name) {
                                        contributorIssuesOpened[contributorIndex].issues_opened++;
                                    }
                                }
                            }
                        }

                        res.send(contributorIssuesOpened);
                    }
                });
            }
        });
    });
}
