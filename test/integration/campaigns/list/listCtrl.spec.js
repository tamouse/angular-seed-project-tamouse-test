// Basic integration test - no mocks
describe('Campaigns List Controller', function () {

  var $scope;

  beforeEach(function () {
    // Load the module we're testing
    module('campaigns');
  });

  function injectController() {
    // Inject our service so we can test it
    inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('ListCtrl', { $scope: $scope });
    });
  }

  describe('when page loads', function () {
    it('it should have a Config', function () {
      injectController();

      expect($scope.Config === null).toBe(false);
    });
  });

});
