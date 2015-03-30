describe('Campaigns Detail Controller', function () {

  var $scope;

  beforeEach(function () {
    // Load the module we're testing
    module('campaigns');
  });

  function injectController() {
    // Inject our service so we can test it
    inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('DetailCtrl', { $scope: $scope });
    });
  }

  describe('when page loads', function () {
    it('should have a config', function () {
      injectController();

      expect($scope.Config === null).toBe(false);
    });
  });

});
