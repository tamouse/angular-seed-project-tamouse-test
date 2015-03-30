angular.rlmodule('rl.hellomars.layout.LayoutCtrl', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('hellomars', {
      abstract: true,
      url: '/hellomars',
      templateUrl: 'modules/rl.hellomars/layout/layout.html',
      controller: 'LayoutCtrl'
    });
  })

  .controller('LayoutCtrl', function ($scope) {
    $scope.data = ['Welcome','to','Mars'];
  });
