angular
    .module('app')
    .controller('searchPageCtrl', searchPageCtrl);

function searchPageCtrl($state, $scope) {
$scope.someFun = function () {
    console.log('222')
}
}