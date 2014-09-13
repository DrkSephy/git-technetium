module.exports = function(router, request, async, config) {
    /**
     *  Route to query lines of code added/deleted per contributor within a given repository.
     *  params: owner, repo
     *  github api endpoint: https://api.github.com/repos/:owner/:repo/stats/contributors
     */
    router.get('/loc', function(req, res) {
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

                var contributor_loc = [];
                for(contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                    contributor_loc[contributorIndex] = {
                        'name': contributors[contributorIndex],
                        'loc_added': 0,
                        'loc_deleted': 0
                    };
                }

                request({
                    url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/stats/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                    headers: { 'user-agent': 'git-technetium' },
                    json: true
                }, function(error, response, body) {
                    if(!error && response.statusCode === 200) {
                        for(var dataIndex = 0; dataIndex < body.length; dataIndex++) {
                            for(var weekIndex = 0; weekIndex < body[dataIndex].weeks.length; weekIndex++) {
                                for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                                    if(body[dataIndex].author.login === contributor_loc[contributorIndex].name) {
                                        contributor_loc[contributorIndex].loc_added += body[dataIndex].weeks[weekIndex].a;
                                        contributor_loc[contributorIndex].loc_deleted += body[dataIndex].weeks[weekIndex].d;
                                    }
                                }
                            }
                        }
                        res.send(contributor_loc);
                    }
                });
            }
        });
    });
};
