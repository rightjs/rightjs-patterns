/**
 * Strategy
 *
 * Defines a family of algorithms with the same interface, then
 * incapsulates them in the some context making them interchangable
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// defining our strategies
var W3C_Strategy = new Class({
  operation: function() {
    return "Let's do that normal way";
  }
});

var IE_Strategy = new Class({
  operation: function() {
    return "Okay, let's do it their way";
  }
});

// creating the context
var StrategyContext = new Class({
  strategy: null,
  
  initialize: function() {
    this.strategy = new (Browser.IE ? IE_Strategy : W3C_Strategy);
  },
  
  operation: function() {
    return this.strategy.operation();
  }
});


// application
var object = new StrategyContext();

// will return different results depending on the current browser
object.operation(); 