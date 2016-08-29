'use strict';

const angular = require('angular');
const dataApp = angular.module('dataApp', []);

dataApp.controller('KingcoPopController', ['$http', '$log', '$q', KingcoPopController]);

function KingcoPopController($http, $log, $q) {

  let url = `${__API_URL__}/api/lingco-population`;
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application.json',

    }
  }
}
