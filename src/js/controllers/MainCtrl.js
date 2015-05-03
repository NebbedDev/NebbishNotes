'use strict';

var Firebase = require('firebase');

var MainCtrl = function($scope, $firebaseArray) {
  var ref = new Firebase('https://nebbishnotes.firebaseio.com/data');
  
  $scope.data = $firebaseArray(ref);
  $scope.testVar = 'Nebbed!';

  $scope.newData = '';

  $scope.addData = function() {
    var newData = $scope.newData.trim();
    if (!newData.length) {
      return;
    }

    $scope.data.$add(newData);
    $scope.newData = '';
  };


};

module.exports = MainCtrl;
