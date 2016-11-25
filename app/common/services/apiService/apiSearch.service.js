angular
    .module('app')
    .factory('apiSearchService', apiSearchService);

function apiSearchService($http) {
    var setUserInput = function (input) {
        input = JSON.stringify(input);
        sessionStorage.userInput = input;
    };
    function getUserInput() {
        return JSON.parse(sessionStorage.userInput);
    }
    var getResponseFromApi = function(input, pageNumber) {

        return $http.get('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=' + pageNumber + '&place_name=' + input)
            .then(
                function (resp) {
                    return resp.data.response
                });
    };

    return {
        setUserInput: setUserInput,
        getUserInput: getUserInput,
        getResponseFromApi: getResponseFromApi
    }
}