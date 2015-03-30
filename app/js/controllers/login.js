angular.module("MainController")
.controller("loginCtrl", ["$scope", "MainSrvc", "$state", function ($scope, MainSrvc, $state) {
    $scope.user = {
        login: null,
        password: null
    };
    $scope.submit = function () {
        MainSrvc.logIn($scope.user).then(function (res) {
            sessionStorage.ott = res.ott;
        });
    };
}]);
