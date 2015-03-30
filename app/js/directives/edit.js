angular.module("MainController")
.directive("edit", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true   
    };
});
