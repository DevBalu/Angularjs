'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the mapiApp
 */
angular.module('mapiApp')
	.controller('MovieCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

		$scope.setVideo = function (src) {
			$scope.curentVideo = src;
			var result = angular.element("#videoPlayer")[0];
			result.pause();
			result.load();
			result.play();
		};

		$http.get('http://datalock.ru/playlist/0/' + $routeParams.movieId + '/list.xml').then(function (response) {

			$scope.movie = response.data;
			$scope.setVideo($scope.movie.playlist[0].file);
		})
	}]);
