
angular
    .module('app')
    .controller('propertyPageCtrl', propertyPageCtrl);

    function propertyPageCtrl($scope, $stateParams, propertyPageService) {
        if($stateParams.propertyInfo != null){
            propertyPageService.setPropertyData($stateParams.propertyInfo);
        }
        $scope.propertyInfo = propertyPageService.getPropertyData();
        console.log($scope.propertyInfo);
    }