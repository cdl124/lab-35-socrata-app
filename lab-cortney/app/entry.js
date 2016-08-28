'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');

angular.module('dataApp', [ngRoute])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./html/home.html')
  })
  .when('/about', {
    template: require('./view/about/about.html')
  })
  .when('/data', {
    template: require('./view/data/data.html')
  })
  .when('/kingco-population', {
    template: require('./view/kingco-population/kingco-population.html')
  })
  .otherwise({
    template: require('./view/404/404.html'),
    controller: 'FourOhFourController'
  });
}]);

  // redirectTo: '/about'
