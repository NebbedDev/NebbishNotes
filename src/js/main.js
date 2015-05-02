'use strict';

var angular = require('angular');
var app = angular.module('myApp', []);

var MainCtrl = require('./controllers/MainCtrl');

app.controller('MainCtrl', ['$scope', MainCtrl]);
