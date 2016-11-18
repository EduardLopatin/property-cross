angular
    .module('app')
    .factory('favoritesService', favoritesService);

function favoritesService() {
    var setProperty = function(item) {
        item = JSON.stringify(item);
        localStorage.favorites.push(item)
    }
    function getFavoritesList() {
        return JSON.parse(localStorage.favorites)
    }
    return {
        setProperty: setProperty,
        getFavoritesList: getFavoritesList
    }
}