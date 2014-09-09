gitApp.factory('pullsFactory', function($http) {
    'use strict';

    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/pulls',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
