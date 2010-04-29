/**
 * Facade
 *
 * Provide a unified interface to a set of interfaces in a subsystem.
 * Facade defines a higher-level interface that makes the subsystem easier to use.
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Item1 = new Class({
  operation_1: function() {
    console.log("Item1#operation1");
  }
});

var Item2 = new Class({
  operation_2: function() {
    console.log("Item2#operation2");
  }
});

var Item3 = new Class({
  operation_3: function() {
    console.log("Item3#operation3");
  }
});


// the facade interface
var Facade = new Class({
  initialize: function() {
    this.item_1 = new Item1();
    this.item_2 = new Item2();
    this.item_3 = new Item3();
  },
  
  operate: function() {
    this.item_1.operation_1();
    this.item_2.operation_2();
    this.item_3.operation_3();
  }
});


// test
new Facade().operate();