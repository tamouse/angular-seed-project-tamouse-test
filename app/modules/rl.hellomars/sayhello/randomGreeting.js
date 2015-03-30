// Load the rlConfig global variable in a more angular-way
angular.rlmodule('rl.hellomars.sayhello.RandomGreeting', [])
  .factory('RandomGreeting', function () {
    var greetings = [
      'Hello',
      'Hi',
      'How\'s it going?',
      'Meep.'
    ];
    return {
      get: function get() {
        return greetings[Math.floor(Math.random() * greetings.length)];
      }
    };
  });
