'use strict';

angular.module('carDetail').component('carDetail', {
    templateUrl: 'car-detail/car-detail.template.html',
    controller: ['$http', '$routeParams', function CarDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl){
            self.mainImageUrl = imageUrl;
        };

        $http.get('cars/' + $routeParams.carId + '.json').then(function (response) {
            self.car = response.data;
            self.setImage(self.car.images[0]);
        })
    }]
});