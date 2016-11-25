angular
    .module('app')
    .factory('favoritesService', favoritesService);

function favoritesService() {
    var setList = function (list) {
        localStorage.favorites = JSON.stringify(list);
    }
    var setProperty = function(item) {
        if(localStorage.favorites){
            putItemInLocalStorage(item);
        }else{
            localStorage.favorites = '[]';
            putItemInLocalStorage(item);
        }
    };

    function putItemInLocalStorage(item) {
        var favoritesList = getFavoritesList();
        favoritesList.unshift(item);
        localStorage.favorites = JSON.stringify(favoritesList);
    }
    var removePropertyData = function (propertyInfo) {
        var list = getFavoritesList();
        var filteredList = list.filter(function (item) {
            return item.img_url != propertyInfo.img_url
        });
        setList(filteredList);
    };
    
    function getFavoritesList() {
        return localStorage.favorites && JSON.parse(localStorage.favorites) || '[]'
    }
    
    var checkProperty = function(property) {
        return getFavoritesList().find(function (item) {
               return property.img_url === item.img_url
           });
    };

    return {
        setProperty: setProperty,
        getFavoritesList: getFavoritesList,
        checkProperty: checkProperty,
        setList: setList,
        removePropertyData: removePropertyData
    }
}