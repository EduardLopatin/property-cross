angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($scope, $stateParams, apiSearchService, searchHistoryService) {
        $scope.pageCount = 1;
        $scope.propsList = [];
        $scope.viewedResultsCount = 0;
        $scope.showError = false;
        $scope.MainSpinner = true;

        loadPage($scope.pageCount);

        $scope.loadMore = function () {
            $scope.LoadMoreSpinner = true;
            $scope.pageCount++;
            loadPage($scope.pageCount);
        };

        function loadPage(pageNumber) {
            if ($stateParams.userInput != null) {
                apiSearchService.setUserInput($stateParams.userInput);
            }
            apiSearchService.getResponseFromApi(apiSearchService.getUserInput(), pageNumber)
                .then(function (resp) {
                    $scope.propsList = $scope.propsList.concat(resp.listings);
                    $scope.showError = checkResponse();
                    searchHistoryService.setInput(apiSearchService.getUserInput(), resp.total_results);
                    setViewInfo(resp);
                    $scope.MainSpinner = false;
                    $scope.LoadMoreSpinner = false;
                })
        }

        function checkResponse() {
            if ($scope.propsList.length === 0) {
                return true
            } else {
                return false
            }
        }
        function setViewInfo(response) {
            $scope.viewedResultsCount += response.listings.length;
            $scope.statusInfo = $scope.viewedResultsCount + ' matches of ' + response.total_results;
            $scope.checkQuantity = response.total_results > 20;
        }
    }
