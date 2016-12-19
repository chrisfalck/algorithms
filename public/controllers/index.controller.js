let app = angular.module('Practice', [])
.controller('IndexCtrl', ['$scope', ($scope) => {
    $scope.ngIncludeUrls = [];
    $scope.ngIncludeUrls.push(
        {'name': 'Insertion Sort', 'url': 'insertion-sort.html'}
    );
    $scope.selectedView = $scope.ngIncludeUrls[0];
}]);
