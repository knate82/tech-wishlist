angular.module("MainApp")

.controller("NeedsController", ["$scope", function($scope) {
    $scope.needs = [
        {
            name: "Lazor Razor",
            price: "$289",
            image: "https://i.ytimg.com/vi/4inYxdCy0Ic/maxresdefault.jpg"
        },
        {
            name: "Epson Home Cinema Projector",
            price: "$1,900.05",
            image: "https://images-na.ssl-images-amazon.com/images/I/41rf0Dihf7L.jpg"
        },
        {
            name: "Beats Solo Wireless",
            price: "$299.95",
            image: "https://apple5x1.com/wp-content/uploads/2016/09/Auriculares-Beats-1.jpg"
        }
    ];
}])