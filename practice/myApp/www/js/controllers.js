angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ListController', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;

    $scope.onItemDelete = function(item){
      $scope.artists.splice($scope.artists.indexOf(item), 1);
    }

    $scope.doRefresh = function() {
      $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.$broadcast('scroll.refreshComplete');
      });
    }


    $scope.toggleStar = function(item) {
      item.star = !item.star;
    }

    $scope.moveItem = function(item, fromIndex, toIndex) {
      $scope.artists.splice(fromIndex, 1);
      $scope.artists.splice(toIndex, 0, item);
    };
  });
});
