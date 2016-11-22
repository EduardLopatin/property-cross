
angular
    .module('app')
    .controller('listElementCtrl', listElementCtrl);
    function listElementCtrl($scope, $state) {
        $scope.showPropertyInfo = function (item) {
            $state.go('propertyPage', {propertyInfo: item})
        } ;
    }