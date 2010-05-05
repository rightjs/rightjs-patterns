/**
 * Abstract factory
 *
 * Provides an interface for creating groups of related objects without
 * specifying their actual type
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// defining the abstractions
var Alive = new Class({
  grow: function() {
    throw "An abstract method";
  }
});

var Plant = new Class(Alive, {
  name: null,
});

var Animal = new Class(Alive, {
  eat: function(plant) {
    throw "An abstract method";
  }
});

// defining the specializations
var Grass = new Class(Plant, {
  name: "grass",
  
  grow: function() {
    return "The grass grows";
  }
});

var Horse = new Class(Animal, {
  grow: function() {
    return "The horsy grows";
  },
  
  eat: function(plant) {
    return "And now this horsy happily eats the "+ plant.name;
  }
});


// abstract factory
var AbstractFactory = new Class({
  create_alive: function() {
    throw "An abstract method";
  }
});


// specific factories
var Farm = new Class(AbstractFactory, {
  create_alive: function() {
    return new Grass();
  }
});

var Ranch = new Class(AbstractFactory, {
  create_alive: function() {
    return new Horse();
  }
});


// application
var farm   = new Farm();
var ranch  = new Ranch();

var plant  = farm.create_alive();
var animal = ranch.create_alive();

plant.grow();       // -> 'The grass grows'
animal.grow();      // -> 'The horsy grows'
animal.eat(plant);  // -> 'And now this horsy happyliy eats the grass'

