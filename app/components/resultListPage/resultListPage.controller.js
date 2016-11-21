angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($scope, $stateParams, apiSearchService, searchHistoryService) {
        $scope.pageCount = 1;
        $scope.propsList = [];
        $scope.viewedResultsCount = 0;

        loadPage($scope.pageCount);

        $scope.loadMore = function () {
            $scope.pageCount++;
            loadPage($scope.pageCount);
        };

        function loadPage(pageNumber) {
            if($stateParams.userInput != null){
                apiSearchService.setUserInput($stateParams.userInput);
            }
            apiSearchService.getResponseFromApi(apiSearchService.getUserInput(), pageNumber)
                .then(function (resp) {
                    $scope.propsList = $scope.propsList.concat(resp.listings);
                    console.log(resp);
                    searchHistoryService.setInput(apiSearchService.getUserInput(), resp.total_results);
                    $scope.viewedResultsCount += resp.listings.length;
                    $scope.statusInfo =  $scope.viewedResultsCount + ' matches of ' + resp.total_results;
                    $scope.checkQuantity = resp.total_results >= 20;
                });
        }
    }
