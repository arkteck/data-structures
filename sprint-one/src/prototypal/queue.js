var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.size()] = val;
  },
  dequeue: function() {
    if (this.size()) {
      let tmp = this.storage[0];
      for (let i = 0; i < this.size() - 1; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[this.size() - 1];
      return tmp;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
