gitApp.factory('issuesCommentsFactory', function($http) {
    'use strict';

    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/issuesComments',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
