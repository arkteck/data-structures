var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) { // very beginning, no head/tail
      list.head = Node(value);
      list.tail = list.head;
    } else if (!list.head.next) { // only head, no tail
      list.head.next = Node(value);
      list.tail = list.head.next;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      throw new Error('error');
    }
    var res = list.head.value;
    list.head = list.head.next;
    return res;
  };

  list.contains = function(target) {
    if ((list.head && list.head.value === target) || (list.tail && list.tail.value === target)) {
      return true;
    }
    if (list.head.next) {
      var tmp = list.head.next;
      if (tmp.value === target) {
        return true;
      }
      while (tmp.next) {
        if (tmp.next.value === target) {
          return true;
        }
        tmp = tmp.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
