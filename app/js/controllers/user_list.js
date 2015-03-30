angular.module("MainController")
.controller("userListCtrl", ["$scope", "MainSrvc", "user", function ($scope, MainSrvc, user) {
    $scope.list = [];
}]);
