gitApp.factory('locFactory', function($http) {
    'use strict';

    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/loc',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
