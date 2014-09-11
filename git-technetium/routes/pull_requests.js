module.exports = function(router, request, async, config) {
    /**
     *  Route to query the total pull requests per contributor within a given repository
     *  params: ownerName, repoName
     */
    router.get('/pulls', function(req, res) {
        request({
            url: 'https://api.github.com/repos/'+req.query.owner + '/' + req.query.repo + '/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
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
                for(contributor_index = 0; contributor_index < body.length; contributor_index++) {
                    contributor_tally.push({
                        'name' : contributors[contributor_index],
                        'total': 0
                    });
                }

                var json = [];
                var pageCounter = 1;
                var getData = function(pageCounter) {
                    request({
                        url: 'https://api.github.com/repos/'+req.query.owner + '/' + req.query.repo + '/pulls?state=closed&page=' + pageCounter + '&' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                        headers: { 'user-agent' : 'git-technetium' },
                        json: true
                    }, function(error, response, body) {
                        if(!error && response.statusCode === 200) {
                            var pullsIndex;
                            for(pullsIndex = 0; pullsIndex < body.length; pullsIndex++) {
                                json.push(body[pullsIndex]);
                            }

                            if(body.length < 30) {
                                for(pullsIndex = 0; pullsIndex < json.length; pullsIndex++) {
                                    for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                                        if(json[pullsIndex].user.login === contributor_tally[contributorIndex].name) {
                                            contributor_tally[contributorIndex].total++;
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
