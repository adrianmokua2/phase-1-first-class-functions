// Define the receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // Define the returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction() {
      // This is a named function
    };
  }
  
  // Define the returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function () {
      // This is an anonymous function
    };
  }
  
  // Export the functions for testing
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  