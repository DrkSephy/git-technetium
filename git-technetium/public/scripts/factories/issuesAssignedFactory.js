/**
 *  Factory for getting the number of assigned issues per contributor in a repository.
 */

'use strict';

gitApp.factory('issuesAssignedFactory', function($http) {
    return {
        get: function(ownerName, repoName) {
            return $http({
                url: '/api/issues_assigned',
                method: 'GET',
                params: {
                    ownerName: ownerName,
                    repoName: repoName
                }
            });
        }
    };
});
