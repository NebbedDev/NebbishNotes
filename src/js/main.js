'use strict';

var angular = require('angular');
var angularfire = require('angularfire');

var app = angular.module('myApp', [angularfire]);

var MainCtrl = require('./controllers/MainCtrl');

app.controller('MainCtrl', ['$scope', '$firebaseArray', MainCtrl]);
