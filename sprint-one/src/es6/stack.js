class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(val) {
    this.storage[this.size()] = val;
  }
  pop() {
    let tmp = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return tmp;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}