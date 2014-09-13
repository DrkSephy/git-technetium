module.exports = function(router, request, async, config) {
    /**
     *  Precondition:
     *      ownerName (string): The owner username of the target repository
     *      repoName  (string): The target repository name
     *  Postcondition:
     *      An array of objects, where each object contains the following properties:
     *          name (string): The contributor username
     *          issues_opened (string): The number of issues opened by the respective contributor
     */
    router.get('/issues_opened', function(req, res) {
        request({
            url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
            headers: { 'user-agent': 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var contributors = [];
                var contributorIndex;
                for(contributorIndex = 0; contributorIndex < body.length; contributorIndex++) {
                    contributors.push(body[contributorIndex].login);
                }

                var contributorIssuesOpened = [];
                for(contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                    contributorIssuesOpened.push({
                        'name': contributors[contributorIndex],
                        'issues_opened': 0
                    });
                }

                var json = [];
                var pageCounter = 1;
                var getData = function(pageCounter) {
                    request({
                        url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/issues?state=all&page=' + pageCounter + '&' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                        headers: { 'user-agent': 'git-technetium' },
                        json: true
                    }, function(error, response, body) {
                        if(!error && response.statusCode === 200) {
                            var issueIndex;
                            for(issueIndex = 0; issueIndex < body.length; issueIndex++) {
                                if(!body[issueIndex].pull_request) {
                                    json.push(body[issueIndex]);
                                }
                            }

                            if(body.length < 30) {
                                for(issueIndex = 0; issueIndex < json.length; issueIndex++) {
                                    for(var contributor_index = 0; contributor_index < contributorIssuesOpened.length; contributor_index++) {
                                        if(json[issueIndex].user.login === contributorIssuesOpened[contributor_index].name) {
                                            contributorIssuesOpened[contributor_index].issues_opened++;
                                        }
                                    }
                                }
                                res.send(contributorIssuesOpened);
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
