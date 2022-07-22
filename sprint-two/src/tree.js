var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (JSON.stringify(this.value) === JSON.stringify(target)) {
    return true;
  }
  if (this.children.length) {
    return _.some(this.children, function(element) {
      if (element.contains(target)) {
        return true;
      }
    });
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
