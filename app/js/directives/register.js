angular.module("MainController")
.directive("register", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
