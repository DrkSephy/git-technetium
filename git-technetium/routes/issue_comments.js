module.exports = function(router, request, async, config) {
    /**
     *  Route to query the total issues comments  per contributor within a given repository
     *  params: ownerName, repoName
     */
    router.get('/issuesComments', function(req, res) {
        request({
            url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
            headers: { 'user-agent' : 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var contributors = [];
                var contributorIndex;
                for(contributorIndex = 0; contributorIndex < body.length; contributorIndex++) {
                    contributors.push(body[contributorIndex].login);
                }

                var contributor_tally = [];
                for(contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                     contributor_tally.push({
                        'name': contributors[contributorIndex],
                        'issue_comments': 0
                    });
                }

                var json = [];
                var pageCounter = 1;
                var getData = function(pageCounter) {
                    request({
                        url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/issues/comments?page=' + pageCounter + '&' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                        headers: { 'user-agent' : 'git-technetium' },
                        json: true
                    }, function(error, response, body) {
                        if(!error && response.statusCode === 200) {
                            var re = '/pull';
                            var issuesIndex;
                            for(issuesIndex = 0; issuesIndex < body.length; issuesIndex++) {
                                if(!body[issuesIndex].html_url.match(re)) {
                                    json.push(body[issuesIndex]);
                                }
                            }

                            if(body.length < 30) {
                                for(issuesIndex = 0; issuesIndex < json.length; issuesIndex++) {
                                    for(var contributorIndex = 0; contributorIndex < contributor_tally.length; contributorIndex++) {
                                        if(json[issuesIndex].user.login === contributor_tally[contributorIndex].name) {
                                            contributor_tally[contributorIndex].issue_comments++;
                                        }
                                    }
                                }
                                res.send(contributor_tally);
                            } else {
                                getData(pageCounter + 1);
                            }
                        }
                    });
                };
                getData(1);
            }
        });
    });
};
