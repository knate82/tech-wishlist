var app = angular.module("MainApp", ["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
    .when('/needs', {
        controller: "NeedsController",
        templateUrl: "templates/needs.html"
    })
    .when('/wants', {
        controller: "WantsController",
        templateUrl: "./templates/wants.html"
    });
})

.controller("MainController", ["$scope", function($scope) {
    
}])