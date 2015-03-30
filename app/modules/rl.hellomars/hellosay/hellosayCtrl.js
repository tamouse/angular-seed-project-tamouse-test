angular.rlmodule('rl.hellomars.hellosay.HellosayCtrl', ['rl.hellomars.initialize.Config', 'rl.hellomars.hellosay.RandomGreeting'])
  .config(function ($stateProvider) {
    $stateProvider.state('hellomars.hellosay', {
      url: '/hellosay',
      data: { title: 'New Creative' },
      templateUrl: 'modules/rl.hellomars/hellosay/hellosayCtrl.html',
      controller: 'HellosayCtrl'
    });
  })
  .controller('HellosayCtrl', function ($scope, Config, RandomGreeting) {
    $scope.hithere = '\'ello \'ello';
    $scope.Config = Config;
    $scope.newGreeting = function newGreeting() {
      $scope.greeting = RandomGreeting.get();
    };
    $scope.newGreeting();
  });
