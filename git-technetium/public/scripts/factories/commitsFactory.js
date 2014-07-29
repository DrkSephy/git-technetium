'use strict';

gitApp.factory('commitsFactory', function($http){
    return {
        get: function(owner, repo){
            return $http({
                url: '/api/commits',
                method: 'GET',
                params: {
                    owner: owner,
                    repo: repo
                }
            });
        }
    };
});