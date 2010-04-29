/**
 * Compsite
 *
 * This is your classicall tree structures where leaves and
 * nodes are both inherited from the same super class so that
 * they had an uniformed interface
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
var Item = new Class({
  initialize: function(name) {
    this.name = name;
  },
  
  getName: function() {
    return this.name;
  }
});

var Leaf = new Class(Item, {
  
});

var Node = new Class(Item, {
  initialize: function(name) {
    this.$super(name);
    this.children = [];
  },
  
  add: function(item) {
    this.children.push(item);
  },
  
  remove: function(item) {
    this.children = this.children.without(item);
  },
  
  list: function() {
    return this.children;
  }
});


// application

var root = new Node('Root');

root.add(new Node('Dir 1'));
root.add(new Node('Dir 2'));
root.add(new Leaf('File 1'));
root.add(new Leaf('File 2'));

root.list().map('getName').join(', ');

// will return 'Dir 1, Dir 2, File 1, File 2'
