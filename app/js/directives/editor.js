angular.module("MainController")
.directive("editor", function () {
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "../templates/editor.html",
        scope: false,
        controller: "editorCtrl"
    };
});
