

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, check = true) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, [[k, v]]);
  } else {
    var idx = this._storage.get(index).findIndex(element => element[0] === k);
    if (idx === -1) {
      this._storage.get(index).push([k, v]);
    } else {
      this._storage.get(index)[idx] = [k, v];
    }
  }
  if (check) {
    this._checkSize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    if (this._storage.get(index).length > 1) {
      var idx = this._storage.get(index).findIndex(element => element[0] === k);
      return this._storage.get(index)[idx][1];
    } else {
      return this._storage.get(index)[0][1];
    }
  }
};

HashTable.prototype.remove = function(k, check = true) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    if (this._storage.get(index).length > 1) {
      var idx = this._storage.get(index).findIndex(element => element[0] === k);
      this._storage.get(index).splice(idx, 1);
    } else {
      this._storage.set(index, undefined);
    }
  }
  if (check) {
    this._checkSize();
  }
};

HashTable.prototype._checkSize = function() {
  var occupied = 0;
  this._storage.each(function(x) {
    if (x !== undefined) {
      x.forEach(function(y) {
        occupied++;
      });
    }
  });
  if (occupied < .25 * this._limit || occupied > .75 * this._limit) {
    if (occupied < .25 * this._limit) {
      this._limit /= 2;
    } else {
      this._limit *= 2;
    }
    var original = [];
    this._storage.each(function(v, i, a) {
      if (v) {
        v.forEach(function(x) {
          original.push(x);
        });
      }
    });
    this._storage = LimitedArray(this._limit);
    const obj = this;
    original.forEach(function(x) {
      obj.insert(x[0], x[1], false);
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


