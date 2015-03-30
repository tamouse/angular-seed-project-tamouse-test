angular.rlmodule('campaigns.detail.DetailCtrl', ['ui.router', 'campaigns.initialize.Config'])
  .config(function ($stateProvider) {
    $stateProvider.state('campaigns.detail', {
      url: '/detail',
      data: { title: 'New Creative' },
      templateUrl: 'modules/campaigns/detail/detailCtrl.html',
      controller: 'DetailCtrl'
    });
  })
  .controller('DetailCtrl', function ($scope, Config) {
    $scope.Config = Config;
  });
