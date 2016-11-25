angular
    .module('app')
    .controller('searchPageCtrl', searchPageCtrl);

function searchPageCtrl($scope, $state, searchHistoryService) {
    $scope.searchHistory = searchHistoryService.getSearchHistoryList();
    $scope.getUserInput = function () {
        if($scope.searchInput != undefined && $scope.searchInput != ''){
            $state.go('resultListPage', {userInput: $scope.searchInput})
        }
    };
    $scope.setItemInInput = function (input) {
        $scope.searchInput = input;
    }

    $scope.checkInput = function () {
      return sessionStorage.userInput === undefined
    };
}