/**
 *  Factory for getting the number of opened issues per contributor in a repository.
 */

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
