angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($scope, $stateParams) {
        $scope.data = $stateParams.item
    }