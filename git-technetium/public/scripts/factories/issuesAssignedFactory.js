/**
 *  Factory for getting the number of assigned issues per contributor in a repository.
 */

'use strict';

gitApp.factory('issuesAssignedFactory', function($http) {
    return {
        get: function(owner, repo) {
            return $http({
                url: '/api/issues_assigned',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});
