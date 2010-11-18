/**
 * Chain of responsibility
 *
 * Contains a list of command objects that process
 * an incomming object one by one. Allows you dinamically
 * reorganize the handlers and ensure that only one handler
 * have access to the object at a time.
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// defining the object that will be processed
var Car = new Class({
  initialize: function(options) {
    this.gas   = options.gas;
    this.oil   = options.oil;
    this.tires = options.tires;
  }
});

// defining an abstract command
var Check = new Class({
  next: null,
  
  check: function(car) {
    if (this.next) {
      this.next.check(car);
    }
  }
});

// defining the specific checks
var GasCheck = new Class({
  check: function(car) {
    if (car.gas < 100)
      console.log("Needs gas refill");
    
    this.$super(car);
  }
});

var OilCheck = new Class({
  check: function(car) {
    if (car.oil < 100)
      console.log("Needs oil refill");
    
    this.$super(car);
  }
});

var TiresCheck = new Class({
  check: function(car) {
    if (car.tires < 100)
      console.log("Needs some pressure in the tires");
    
    this.$super(car);
  }
});

// creating the chain holder object
var PitStop = new Class({
  initialize: function() {
    // creating the check points
    this.gasCheck = new GasCheck();
    this.oilCheck = new OilCheck();
    this.tiresCheck = new TiresCheck();
    
    // joining them together
    this.firstCheck    = this.gasCheck;
    this.firstCheck.next = this.oilCheck;
    this.oilCheck.next = this.tiresCheck;
  },
  
  check: function(car) {
    return this.firstCheck.check(car);
  }
});

// application
var used_car = new Car({
  gas: 40,
  oil: 40,
  tires: 40
});

var pit_stop = new PitStop();

// will run the car through gas, oil and tires check
pit_stop.check(used_car);