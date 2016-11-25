angular
    .module('app')
    .factory('searchHistoryService', searchHistoryService);

    function searchHistoryService() {
        var setInput = function (input, totalResults) {
            if(!localStorage.searchHistory){
                localStorage.searchHistory = '[]'
            }
            var searchHistoryList = checkList(input);
            var historyItem = {
                input: input,
                total_results: totalResults
            };
            searchHistoryList.unshift(historyItem);
            localStorage.searchHistory = JSON.stringify(searchHistoryList);
        };
        function checkList(checkingValue) {
            return getSearchHistoryList().filter(function (item) {
                return item.input != checkingValue
            })
        }
        function getSearchHistoryList() {
                return !!localStorage.searchHistory && JSON.parse(localStorage.searchHistory)
        }
        return {
            setInput: setInput,
            getSearchHistoryList: getSearchHistoryList
        }
    }