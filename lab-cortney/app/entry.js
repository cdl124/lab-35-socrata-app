'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');

const dataApp = angular.module('dataApp', [ngRoute]);
dataApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/about', {
    template: require('./view/about/about.html')
  })
  .when('/data', {
    template: require('./view/data/data.html')
  })
  .otherwise({
    template: require('./view/404/404.html'),
    controller: 'FourOhFourController'
  });
}]);
