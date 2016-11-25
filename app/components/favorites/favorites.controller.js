angular
    .module('app')
    .controller('favoritesCtrl', favoritesCtrl);

function favoritesCtrl($scope, favoritesService) {
$scope.list = favoritesService.getFavoritesList();

$scope.checkList = function () {
    if($scope.list.length === 0){
        return true
    }else {
        return false
    }
}
}