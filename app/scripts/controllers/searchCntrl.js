'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:searchCntrl
 * @description
 * # searchCntrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('searchCntrl', function ($scope, $rootScope) {
  	$scope.showSearchResults = false;
     if ($rootScope.showAdvSearch) { // Show advanced search open on load.
          $scope.isAdvSearchBlockOpen = true;
     } else {
          $scope.isAdvSearchBlockOpen = false;
     }
     $scope.getSearchResults = function() {
     	$scope.showSearchResults = true;
     }
  });
