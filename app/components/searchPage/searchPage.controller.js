angular
    .module('app')
    .controller('searchPageCtrl', searchPageCtrl);

function searchPageCtrl($scope, $state, searchHistoryService) {
    $scope.searchHistory = searchHistoryService.getSearchHistoryList();
    $scope.getUserInput = function (input) {
        if(input != undefined && input != ''){
            $state.go('resultListPage', {userInput: input})
        }
    };

    $scope.checkInput = function () {
      return sessionStorage.userInput === undefined
    };
}