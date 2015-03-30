angular.module("MainController")
.directive("categories", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
