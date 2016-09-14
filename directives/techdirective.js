angular.module("MainApp")

.directive("wishList", function(){
    return {
        restrict: "E",
        templateUrl: "/templates/template.html",
        scope: {
            tech: "="
        }
    }
})