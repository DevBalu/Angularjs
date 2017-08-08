'use strict';

/**
 * @ngdoc function
 * @name mapiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapiApp
 */
angular.module('mapiApp')
  .controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
      $scope.query = '';

      $scope.search = function () {
          $scope.query = $scope.text;

          $http.get('http://seasonvar.ru/autocomplete.php?query=' + $scope.query).then(function (response) {

              $scope.response = response;

              var id =  $scope.response.data.id;
              var sugestion = $scope.response.data.suggestions;

              var res = [];
              for(var i = 0; i < id.length; i++) {
                  res[i] = {
                    id: id[i],
                    suggestion: sugestion[i]
                };
              }
              $scope.result = res;


          });
      };
  }]);
