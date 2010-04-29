/**
 * Decorator
 *
 * Attaches additional responsibilites to an object dynamically.
 * Provides an alternative to traditional inheritance approach
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Zing = new Class({
  foo: function() {
    console.log("Zing#foo");
  }
});


// traditional approach with inheritance
var ZingSuccessor = new Class(Zing, {
  pre_foo: function() {
    console.log("Pre #foo call");
  },
  
  foo: function() {
    this.pre_foo();
    
    this.$super();
  }
});


// decorator approach
var ZingDecorator = new Class(Zing, {
  initialize: function(zing) {
    this.zing = zing;
  },
  
  pre_foo: function() {
    console.log("Pre #foo call");
  },
  
  foo: function() {
    this.pre_foo();
    
    this.zing.foo();
  }
});


// application

var zings = [
  new Zing(),
  new ZingSuccessor(),
  new ZingDecorator()
];

zings.each('foo');
