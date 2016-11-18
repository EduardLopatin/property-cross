angular
    .module('app')
    .controller('searchPageCtrl', searchPageCtrl);

function searchPageCtrl($scope, $state) {
    $scope.getUserInput = function (data) {
        $state.go('resultListPage', {userInput: data})
    }
}