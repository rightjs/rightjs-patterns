/**
 * Template method
 *
 * Defines the skeleton of an algorithm in an operation, deferring
 * some steps to subclasses.
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Game = new Class({
  players: null,
  result:  null,
  
  run: function() {
    this.reset();
    this.play();
    this.print();
  },
  
  reset: function() {
    throw "Abstract method";
  },
  
  play: function() {
    throw "Abstract method";
  },
  
  print: function() {
    console.log(this.result);
  }
});


var Chess = new Class(Game, {
  reset: function() {
    this.players = players: ['Kasparov', 'Computer'];
    this.result  = null;
  },
  
  play: function() {
    this.result = "Computer wins, humanity is doomed";
  }
});


var RussianRulette = new Class(Game, {
  reset: function() {
    this.players = [0, 0, 0, 0, 0, 1];
    this.result  = null;
  },
  
  play: function() {
    this.result = this.players.random() ? 
      "You're dead" : "You're lucky";
  }
});