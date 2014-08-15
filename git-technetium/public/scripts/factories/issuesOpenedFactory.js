'use strict';

gitApp.factory('issuesOpenedFactory', function($http) {
    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/issues_opened',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
