'use strict';
/**
 * @ngdoc overview
 * @name stApp
 * @description
 * # stApp
 *
 * Main module of the application.
 */
angular
    .module('stApp', [
        'carList',
        'carDetail',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
]).config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/cars', {
            template: '<car-list></car-list>'
        }).
        when('/cars/:carId', {
            template: '<car-detail></car-detail>'
        }).
        otherwise('/cars');
    } ]);