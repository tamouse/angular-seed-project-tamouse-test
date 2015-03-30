angular.rlmodule('campaigns.list.ListCtrl', ['ui.router', 'campaigns.initialize.Config'])
  .config(function ($stateProvider) {
    $stateProvider.state('campaigns.list', {
      url: '/list',
      data: { title: 'New Creative' },
      templateUrl: 'modules/campaigns/list/listCtrl.html',
      controller: 'ListCtrl'
    });
  })
  .controller('ListCtrl', function ($scope, Config) {
    $scope.Config = Config;
  });
