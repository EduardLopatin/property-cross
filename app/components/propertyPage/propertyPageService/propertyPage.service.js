angular
    .module('app')
    .factory('propertyPageService', propertyPageService);

function propertyPageService() {
        var setPropertyData = function (item) {
            item = JSON.stringify(item);
            sessionStorage.propertyData = item;
        };
    function getPropertyData() {
        return JSON.parse(sessionStorage.propertyData);
    }

    return {
        setPropertyData: setPropertyData,
        getPropertyData: getPropertyData
    }
}