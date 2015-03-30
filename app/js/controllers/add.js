angular.module("MainController")
.controller("addCtrl", ["$scope", "MainSrvc", "id", function ($scope, MainSrvc, id) {
    $scope.item = {};
    $scope.submit = function () {
        var q = {
            name: $scope.item.name,
            description: $scope.item.description,
            styles: $scope.item.styles
        };
        MainSrvc.createItem(id, q);
        $scope.close();
    };
    $scope.show = function () {
        $("#addModal").modal("show");
    };
    $scope.close = function () {
        $("#addModal").modal("hide");
    };
}]);
