var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length) {
      let tmp = storage[0];
      for (var i = 0; i < Object.keys(storage).length; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage[i - 1];
      return tmp;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
