module.exports = function(router, request, async, config) {
    /**
     *  Route to query the pull request comments  per contributor within a given repository
     *  params: ownerName, repoName
     */
    router.get('/pullRequestComments', function(req, res) {
        request({
            url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
            headers: { 'user-agent' : 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var contributors = [];
                var contributor_index;
                for(contributor_index = 0; contributor_index < body.length; contributor_index++) {
                    contributors.push(body[contributor_index].login);
                }

                var contributor_tally = [];
                for(contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
                     contributor_tally.push({
                        'name': contributors[contributor_index],
                        'comments': 0
                    });
                }

                var json = [];
                var pageCounter = 1;
                var getData = function(pageCounter) {
                    request({
                        url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/issues/comments?state=closed&page=' + pageCounter + '&' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                        headers: { 'user-agent' : 'git-technetium' },
                        json: true
                    }, function(error, response, body) {
                        if(!error && response.statusCode === 200) {
                            var re = '/pull';
                            var requestIndex;
                            for(requestIndex = 0; requestIndex < body.length; requestIndex++) {
                                if(body[requestIndex].html_url.match(re)) {
                                    json.push(body[requestIndex]);
                                }
                            }

                            if(body.length < 30) {
                                for(requestIndex = 0; requestIndex < json.length; requestIndex++) {
                                    for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                                        if(json[requestIndex].user.login === contributor_tally[contributorIndex].name) {
                                            contributor_tally[contributorIndex].comments++;
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
