/**
 * Adaptor
 *
 * Converts an interface of one class into another interface that
 * a client application expect
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Kenobi = new Class({
  skywalker_should_grow_first: function() {
    return "moaning...";
  }
});

var Yoda = new Class({
  grow_first_skywalker_should: function() {
    return "moaning...";
  }
});

// now we can transform the Yoda interface
Yoda.include({
  skywalker_should_grow_first: function() {
    return this.grow_first_skywalker_should();
  }
});

// application
var jedis = [ new Kenobi(), new Yoda() ];

jedis.each(function(jedi) {
  condole.log("Message", jedi.skywalker_should_grow_first());
});
