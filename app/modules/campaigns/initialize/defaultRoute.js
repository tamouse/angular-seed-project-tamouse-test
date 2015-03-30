angular.rlmodule('campaigns.initialize.DefaultRoute', ['ui.router', 'campaigns.layout'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/campaigns/list');
})

.run(function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    $rootScope.pageTitle = [toState.data.title, 'ReachLocal'].join(' | ');
  });
});
