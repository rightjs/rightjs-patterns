/**
 * Singleton
 *
 * Ensures that you always have only one instance of your class
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// A classical singleton in RightJS would look like that
var Klass = new Class({
  extend: {
    instance: function() {
      return this._instance = this._instance || new this;
    },
    _instance: null
  }
});

var inst1 = Klass.instance();
inst1.someVariable = 'shared data';

var inst2 = Klass.instance();
inst2.someVariable; // -> 'shared data'


/**
 * You also can implement singleton in a nicer way using the feature
 * of the `Class` unit, which allows you to return data from the
 * constructor
 */
var Klass = new Class({
  extend: {
    instance: null
  },

  initialize: function() {
    return Klass.instance = Klass.instance || this;
  }
});

var inst1 = new Klass();
inst1.someVariable = 'shared data';

var inst2 = new Klass();
inst2.someVariable; // -> 'shared data';

