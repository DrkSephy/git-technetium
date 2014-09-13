gitApp.controller('reportController', function($scope, commitsFactory, locFactory, commitCommentsFactory,
                    issuesAssignedFactory, issuesClosedFactory, issuesOpenedFactory, issuesCommentsFactory,
                    pullsFactory, pullRequestCommentsFactory) {
    'use strict';

    $scope.commitData = [];
    $scope.locData = [];
    $scope.commitCommentsData = [];
    $scope.issuesAssignedData = [];
    $scope.issuesClosedData = [];
    $scope.issuesOpenedData = [];
    $scope.issuesCommentsData = [];
    $scope.pullRequestsData = [];
    $scope.pullRequestCommentsData = [];

    // Stores the final result of allData
    var allData = [];

    $scope.submitQuery = function() {
        async.waterfall([
            function(callback) {
                $scope.parsed = [];
                allData = [];
                callback(null);
            },

            function(callback) {
                $scope.commitData = commitsFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.locData = locFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.commitCommentsData = commitCommentsFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.issuesAssignedData = issuesAssignedFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.issuesOpenedData = issuesOpenedFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.issuesCommentsData = issuesCommentsFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.issuesClosedData = issuesClosedFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.pullRequestsData = pullsFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                $scope.pullRequestCommentsData = pullRequestCommentsFactory.get($scope.owner, $scope.repo).success(function(data) {
                    allData.push(data);
                    callback(null);
                });
            },

            function(callback) {
                var contributors = [];
                var parsedData = [];

                var arrayIndex, attributeIndex;
                for(arrayIndex = 0; arrayIndex < allData.length; arrayIndex++) {
                    for(attributeIndex = 0; attributeIndex < allData[arrayIndex].length; attributeIndex++) {
                        if(contributors.indexOf(allData[arrayIndex][attributeIndex].name) < 0) {
                            contributors.push(allData[arrayIndex][attributeIndex].name);
                        }
                    }
                }

                for(var contributorIndex = 0; contributorIndex < contributors.length; contributorIndex++) {
                    var contributorData = {};
                    parsedData.push(contributorData);

                    for(arrayIndex = 0; arrayIndex < allData.length; arrayIndex++) {
                        for(attributeIndex = 0; attributeIndex < allData[arrayIndex].length; attributeIndex++) {
                            if(typeof(allData[arrayIndex][contributorIndex].name) !== 'undefined') {
                                parsedData[contributorIndex].name = allData[arrayIndex][contributorIndex].name;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].commits) !== 'undefined') {
                                parsedData[contributorIndex].commits = allData[arrayIndex][contributorIndex].commits;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].loc_added) !== 'undefined') {
                                parsedData[contributorIndex].loc_added = allData[arrayIndex][contributorIndex].loc_added;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].loc_deleted) !== 'undefined') {
                                parsedData[contributorIndex].loc_deleted = allData[arrayIndex][contributorIndex].loc_deleted;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].commit_comments) !== 'undefined') {
                                parsedData[contributorIndex].commit_comments = allData[arrayIndex][contributorIndex].commit_comments;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].issues_assigned) !== 'undefined') {
                                parsedData[contributorIndex].issues_assigned = allData[arrayIndex][contributorIndex].issues_assigned;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].issues_closed) !== 'undefined') {
                                parsedData[contributorIndex].issues_closed = allData[arrayIndex][contributorIndex].issues_closed;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].issues_opened) !== 'undefined') {
                                parsedData[contributorIndex].issues_opened = allData[arrayIndex][contributorIndex].issues_opened;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].issue_comments) !== 'undefined') {
                                parsedData[contributorIndex].issue_comments = allData[arrayIndex][contributorIndex].issue_comments;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].total) !== 'undefined') {
                                parsedData[contributorIndex].pull_requests = allData[arrayIndex][contributorIndex].total;
                            }
                            if(typeof(allData[arrayIndex][contributorIndex].comments) !== 'undefined') {
                                parsedData[contributorIndex].pull_request_comments = allData[arrayIndex][contributorIndex].comments;
                            }
                        }
                    }
                }

                callback(null, parsedData);
            },
        ], function(err, result) {
            $scope.$apply(function() {
                $scope.parsed = result;
            });
        });
    };
});
