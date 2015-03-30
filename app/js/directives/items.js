angular.module("MainController")
.directive("items", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
