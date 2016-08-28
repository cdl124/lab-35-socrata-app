'use strict';

const angular = require('angular');
const dataApp = angular.module('dataApp');

dataApp.controller('FourOhFourController', ['$location', '$timeout', FourOhFourController]);

function FourOhFourController($location, $timeout) {
  $timeout( () => {
    $location.path('/about');
  }, 3000);
}
