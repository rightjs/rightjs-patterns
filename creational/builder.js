/**
 * Builder
 *
 * Separates construction of a complex object from its representation
 * so that the same construction process could build different things
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var WidgetBuilder = new Class({
  build_part1: function() {
    return "part1";
  },
  
  build_part2: function() {
    return "part2";
  },
  
  build_part3: function() {
    return "part3";
  }
});

// creating the IE specific widget builder
var IEWidgetBuilder = new Class(WidgetBuilder, {
  build_part1: function() {
    return this.$super() + " IE fixes";
  }
});

// the actual widget 
var Widget = new Class({
  initialize: function() {
    this.builder = new (Browser.IE ? IEWidgetBuilder : WidgetBuilder);
  },
  
  construct: function() {
    return [
      this.builder.build_part1(),
      this.builder.build_part2(),
      this.builder.build_part3()
    ].join(", ");
  }
});


var widget = new Widget();

widget.construct();

// Under W3C browser will return
//   'part1, part2, part3'
//
// Under IE browser will return
//   'part1 + IE fixes, part2, part3'
