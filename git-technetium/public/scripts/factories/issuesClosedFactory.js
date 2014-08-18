'use strict';

gitApp.factory('issuesClosedFactory', function($http) {
    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/issues_closed',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
