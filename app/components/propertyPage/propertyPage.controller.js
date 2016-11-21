
angular
    .module('app')
    .controller('propertyPageCtrl', propertyPageCtrl);

    function propertyPageCtrl($scope, $stateParams, propertyPageService, favoritesService) {
        if($stateParams.propertyInfo != null){
            propertyPageService.setPropertyData($stateParams.propertyInfo);
        }
        $scope.propertyInfo = propertyPageService.getPropertyData();
        $scope.addToFavorites = function (propertyInfo) {
            favoritesService.setProperty(propertyInfo);
            $scope.isAddedToFavorites = true;
        };
        $scope.removeFromFavorites = function (propertyInfo) {
            var list = favoritesService.getFavoritesList();
            var filteredList = list.filter(function (item) {
                return item.img_url != propertyInfo.img_url
            });
            favoritesService.setList(filteredList);
            $scope.isAddedToFavorites = false
        };
        $scope.isAddedToFavorites = favoritesService.checkProperty($scope.propertyInfo);
    }
