
angular
    .module('app')
    .controller('propertyPageCtrl', propertyPageCtrl);

    function propertyPageCtrl($scope, $stateParams, propertyPageService, favoritesService) {
        $scope.roomsInfo = {};
        if($stateParams.propertyInfo != null){
            propertyPageService.setPropertyData($stateParams.propertyInfo);
        }

        $scope.propertyInfo = propertyPageService.getPropertyData();
        $scope.isAddedToFavorites = favoritesService.checkProperty($scope.propertyInfo);
        $scope.roomsInfo['bathroom'] = formatInfoAboutRooms($scope.propertyInfo, 'bathroom');
        $scope.roomsInfo['bedroom'] = formatInfoAboutRooms($scope.propertyInfo, 'bedroom');

        $scope.addToFavorites = function (propertyInfo) {
            favoritesService.setProperty(propertyInfo);
            $scope.isAddedToFavorites = true;
        };

        $scope.removeFromFavorites = function (propertyInfo) {
            favoritesService.removePropertyData(propertyInfo);
            $scope.isAddedToFavorites = false
        };

        function formatInfoAboutRooms(propertyInfo, roomType) {
                var formattedField = roomType + '_number';
            if(propertyInfo[formattedField] >= 2){
                return propertyInfo[formattedField] + ' ' + roomType + 's';
            }if(propertyInfo[formattedField] === 1){
                return propertyInfo[formattedField] + ' ' + roomType;
            }if(propertyInfo[formattedField] === 0) {
                return  ''
            }
        }

    }
