var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (val) {
  this.storage[this.size()] = val;
};
Stack.prototype.pop = function () {
  let tmp = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return tmp;
};
Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


