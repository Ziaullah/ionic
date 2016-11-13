angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  $scope.items = [{
      title: '1',
      text: 'Abdul Ahad'
    },{
      title: '2',
      text: 'Andrew'
    },{
      title: '3',
      text: 'ipsum'
    },{
      title: '4',
      text: 'clinton'
    },{
      title: '5',
      text: 'John'
  }];

  /*
   * if given item is the selected item, deselect it
   * else, select the given item
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

});