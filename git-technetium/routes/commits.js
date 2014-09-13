module.exports = function(router, request, async, config) {
    /**
     *  Route to query total commits per contributor within a given repository.
     *  params: owner, repo
     *  github api endpoint: https://api.github.com/repos/:owner/:repo/stats/contributors
     */
    router.get('/commits', function(req, res) {
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

                var contributor_commits = [];
                for(contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                    contributor_commits[contributorIndex] = {
                        'name': contributors[contributorIndex],
                        'commits': 0
                    };
                }

                request({
                    url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/stats/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                    headers: { 'user-agent': 'git-technetium' },
                    json: true
                }, function(error, response, body) {
                    if(!error && response.statusCode === 200) {
                        for(var dataIndex = 0; dataIndex < body.length; dataIndex++) {
                            for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                                if(body[dataIndex].author.login === contributor_commits[contributorIndex].name) {
                                    contributor_commits[contributorIndex].commits += body[dataIndex].total;
                                }
                            }
                        }
                        res.send(contributor_commits);
                    }
                });
            }
        });
    });
};
