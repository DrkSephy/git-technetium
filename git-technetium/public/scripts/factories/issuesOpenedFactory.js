gitApp.factory('issuesOpenedFactory', function($http) {
    'use strict';

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
