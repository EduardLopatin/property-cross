angular
    .module('app')
    .controller('resultListPageCtrl', resultListPageCtrl);

    function resultListPageCtrl($scope, $state, $stateParams, apiSearchService) {
        $scope.pageCount = 1;
        $scope.propsList = [];

        loadPage($scope.pageCount);

        $scope.loadMore = function () {
            $scope.pageCount++;
            loadPage($scope.pageCount);
        };

        function loadPage(pageNumber) {
            if($stateParams.userInput != null){
                apiSearchService.setUserInput($stateParams.userInput);
            }
            apiSearchService.getPropsList(apiSearchService.getUserInput(), pageNumber)
                .then(function (resp) {
                    $scope.propsList = $scope.propsList.concat(resp);
                });
        }
    }
