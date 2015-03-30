angular.rlmodule('rl.hellomars.initialize.DefaultRoute', ['ui.router', 'rl.hellomars.layout'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/hellomars/sayhello');
})

.run(function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    $rootScope.pageTitle = [toState.data.title, 'ReachLocal'].join(' | ');
  });
});
