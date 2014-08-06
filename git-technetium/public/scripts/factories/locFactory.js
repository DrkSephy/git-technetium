'use strict';

gitApp.factory('locFactory', function($https){
    return {
        get: function(owner, repo){
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