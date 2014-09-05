module.exports = function(router, request, async, config) {
    /**
     *  Precondition:
     *      ownerName (string): The owner username of the target repository
     *      repoName  (string): The target repository name
     *  Postcondition:
     *      An array of objects such that each object contains the following:
     *          number   (integer): The number of an issue in the repository
     *          title    (string) : The title of an issue in the repository
     *          state    (string) : The state (open, closed) of an issue in the repository
     *          creator  (string) : The username of the person who opened the issue
     *          assignee (string) : The username of the person who was assigned the issue
     */
    router.get('/issues', function(req, res) {
        var issueData = [];
        var getData = function(pageCounter) {
            request({
                url: 'https://api.github.com/repos/' + req.query.owner + '/' + req.query.repo + '/issues?state=all' + '&page=' + pageCounter + '&client_id=' + config.CLIENT_ID + '&' + 'client_secret=' + config.CLIENT_SECRET,
                headers: { 'user-agent': 'git-technetium' },
                json: true
            }, function(error, response, body) {
                if(!error && response.statusCode === 200) {
                    for(var issueIndex = 0; issueIndex < body.length; issueIndex++) {
                        if(!body[issueIndex].pull_request) {
                            issueData.push({
                                number: body[issueIndex].number,
                                title: body[issueIndex].title,
                                state: body[issueIndex].state,
                                creator: body[issueIndex].user.login,
                                assignee: body[issueIndex].assignee ? body[issueIndex].assignee.login : ''
                            });
                        }
                    }

                    if(body.length < 30) {
                        res.send(issueData);
                    } else {
                        getData(pageCounter + 1);
                    }
                }
            });
        };
        getData(1);
    });
};
