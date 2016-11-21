angular
    .module('app')
    .controller('favoritesCtrl', favoritesCtrl);

function favoritesCtrl($scope, favoritesService) {
$scope.list = favoritesService.getFavoritesList();
    console.log($scope.list);
}