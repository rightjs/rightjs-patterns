/**
 * Factory method
 *
 * Defines an interface that creates instances of classes with certain
 * type and then delegates to subclasses to decide which exactly type
 * should be used to create the objects
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// the basic unit
var Zing = new Class({
  foo: function() {
    throw "An abstract method";
  }
});

// some versions of the Zings
var RoundZing = new Class(Zing, {
  foo: function() {
    return "(Zing!)";
  }
});

var SquareZing = new Class(Zing, {
  foo: function() {
    return "[Zing!]";
  }
});


// the abstract zings creator
var ZingsCreator = new Class({
  create: function() {
    throw "An abstract method";
  }
});


// some versions of the zings creator
var RoundZingsCreator = new Class(ZingsCreator, {
  create: function() {
    return new RoundZing();
  }
});

var SquareZingsCreator = new Class(ZingsCreator, {
  create: function() {
    return new SquareZing();
  }
}); 

// testing
var round_zings  = new RoundZingsCreator();
var square_zings = new SquareZingsCreator();

round_zings.create().foo();  // -> '(Zing!)'
square_zings.create().foo(); // -> '[Zing!]'


