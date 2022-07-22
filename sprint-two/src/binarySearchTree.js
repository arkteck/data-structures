var BinarySearchTree = function(value) {
  var result = Object.create(binaryMethods);
  result.value = value;
  return result;
};

var binaryMethods = {};

binaryMethods.insert = function(val) {
  if (val < this.value) {
    // check if left is undefined
    if (this.left === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    throw new Error('error');
  }
};

binaryMethods.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  if (val < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(val);
    }
  } else {
    if (this.right !== undefined) {
      return this.right.contains(val);
    }
  }
  return false;
};

binaryMethods.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
