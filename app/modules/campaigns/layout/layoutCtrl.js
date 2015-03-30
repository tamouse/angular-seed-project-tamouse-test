angular.rlmodule('campaigns.layout.LayoutCtrl', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('hellomars', {
      abstract: true,
      url: '/hellomars',
      templateUrl: 'modules/campaigns/layout/layout.html',
      controller: 'LayoutCtrl'
    });
  })

  .controller('LayoutCtrl', function ($scope) {
    $scope.data = ['Campaign', 'Provisioning'];
  });
