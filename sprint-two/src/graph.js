

// Instantiate a new graph
var Graph = function() {
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.edges[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (!this.contains(node)) {
    throw new Error('error');
  } else {
    delete this.edges[node];
    for (var keys in this.edges) {
      if (this.edges[keys].indexOf(node) !== -1) {
        this.edges[keys].splice(this.edges[keys].indexOf(node), 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
  this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.edges) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


