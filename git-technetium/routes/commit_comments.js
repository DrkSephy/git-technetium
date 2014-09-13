module.exports = function(router, request, async, config) {
    /**
     *  Route to query total commit comments per contributor within a given repository.
     *  params: owner, repo
     *  github api endpoint: https://api.github.com/repos/:owner/:repo/comments
     */
    router.get('/commitComments', function(req, res) {
        // First request builds a list of all contributors for a given repository.
        request({
            url: 'https://api.github.com/repos/' + req.query.owner + '/' +  req.query.repo + '/contributors' + '?' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
            headers: { 'user-agent': 'git-technetium' },
            json: true
        }, function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var contributors = [];
                var contributor_index;
                for(contributor_index = 0; contributor_index < body.length; contributor_index++) {
                    contributors.push(body[contributor_index].login);
                }

                var contributor_comments = [];
                for(contributor_index = 0; contributor_index < contributors.length; contributor_index++) {
                    contributor_comments[contributor_index] = {
                        'name': contributors[contributor_index],
                        'commit_comments': 0
                    };
                }

                var json = [];
                var pageCounter = 1;
                var getData = function(pageCounter) {
                    request({
                        url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/comments?page=' + pageCounter + '&' + 'client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                        headers: { 'user-agent' : 'git-technetium' },
                        json: true
                    }, function(error, response, body) {
                        if(!error && response.statusCode === 200) {
                            for(var comment_index = 0; comment_index < body.length; comment_index++) {
                                json.push(body[comment_index]);
                            }

                            if(body.length < 30) {
                                for(var commentIndex = 0; commentIndex < json.length; commentIndex++) {
                                    for(var contributorIndex = 0; contributorIndex < contributor_comments.length; contributorIndex++) {
                                        if(json[commentIndex].user.login === contributor_comments[contributorIndex].name) {
                                            contributor_comments[contributorIndex].commit_comments++;
                                        }
                                    }
                                }
                                res.send(contributor_comments);
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
