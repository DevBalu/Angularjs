'use strict';

angular.module('carList').
    component('carList', {
    templateUrl: 'car-list/car-list.template.html',
    controller: ['$http', function CarListController($http) {
       var self = this;
       this.orderid = 'age';
       $http.get('cars/cars.json').then(function (response) {
            self.cars = response.data;
        });
    }]
});
