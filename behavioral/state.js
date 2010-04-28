/**
 * State
 *
 * Allows to alter the object's behavior depending on it's state
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// defining the states
var RawState = new Class({
  description: function() {
    return "Needs to be cooked";
  }
});

var CookedState = new Class({
  description: function() {
    return "Ready to be eaten";
  }
});

// defining a context for the states
var Food = new Class({
  initialize: function() {
    this.state = new RawState();
  },
  
  check: function() {
    return this.state.description();
  },
  
  cook: function() {
    this.state = new CookedState();
  }
});


// application

var steak = new Food();

steak.check(); // -> 'Needs to be cooked'

steak.cook();

steak.check(); // -> 'Ready to be eaten'
