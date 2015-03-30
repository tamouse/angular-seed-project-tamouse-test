angular.rlmodule('rl.hellomars.sayhello.SayhelloCtrl', ['rl.hellomars.initialize.Config', 'rl.hellomars.sayhello.RandomGreeting'])
  .config(function ($stateProvider) {
    $stateProvider.state('hellomars.sayhello', {
      url: '/sayhello',
      data: { title: 'New Creative' },
      templateUrl: 'modules/rl.hellomars/sayhello/sayhelloCtrl.html',
      controller: 'SayhelloCtrl'
    });
  })
  .controller('SayhelloCtrl', function ($scope, Config, RandomGreeting) {
    $scope.hithere = '\'ello \'ello';
    $scope.Config = Config;
    $scope.newGreeting = function newGreeting() {
      $scope.greeting = RandomGreeting.get();
    };
    $scope.newGreeting();
  });
