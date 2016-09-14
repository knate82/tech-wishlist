angular.module("MainApp")

.controller("WantsController", ["$scope", function($scope) {
    $scope.wants = [
        {
            name: "DarkWing Duck",
            price: "$9.99",
            image: "http://img.lum.dolimg.com/v1/images/open-uri20150422-12561-1j49zd5_333d4d52.jpeg?region=0%2C0%2C1000%2C1357"
        },
        {
            name: "Polk Audio RTI A9 Floorstanding Speaker",
            price: "$749.95",
            image: "https://images-na.ssl-images-amazon.com/images/I/61Ns2cSJwCL._SL1200_.jpg"
        }
    ]
}])