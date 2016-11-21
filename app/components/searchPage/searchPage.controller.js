angular
    .module('app')
    .controller('searchPageCtrl', searchPageCtrl);

function searchPageCtrl($scope, $state, searchHistoryService) {
    $scope.searchHistory = searchHistoryService.getSearchHistoryList();
    $scope.getUserInput = function (data) {

        $state.go('resultListPage', {userInput: data})
    }
}