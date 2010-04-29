/**
 * Command
 *
 * Encapsulates an object and everything that needed to call
 * it inside a command object, representing it as an independent
 * unit that knows how to do some action.
 *
 * Oftenly used to make undoable commands
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */


// here we have two dummy units
var Light = new Class({
  turnOn: function() {
    return "The light is on";
  },
  
  turnOff: function() {
    return "The light is off";
  }
});

var Music = new Class({
  play: function() {
    return "The music is on";
  },
  
  stop: function() {
    return "The music is off";
  }
});

// and a switch wich can be used with any of those two
var Switch = new Class({
  initialize: function(command) {
    this.command = command;
  },
  
  flipUp: function() {
    return this.command.execute();
  },
  
  flipDown: function() {
    return this.command.undo();
  }
});

// an abstract command interface
var Command = new Class({
  initialize: function(object) {
    this.object = object;
  },
  
  execute: function() {
    throw "Abstract method";
  },
  
  undo: function() {
    throw "Abstract method";
  }
});

// now we have two commands, one turns on lights and another turns on the music
var LightOnCommand = new Class(Command, {
  execute: function() {
    return this.object.turnOn();
  },
  
  undo: function() {
    return this.object.turnOff();
  }
});

var MusicOnCommand = new Class(Command, {
  execute: function() {
    return this.object.play();
  },
  
  undo: function() {
    return this.object.stop();
  }
});


// putting everything together
var lamp   = new Light();
var player = new Music();

var lamp_on_command   = new LightOnCommand(lamp);
var player_on_command = new MusicOnCommand(player);

var lamp_switch   = new Switch(lamp_on_command);
var player_switch = new Switch(player_on_command);

lamp_switch.flipUp();   // -> 'The light is on'
lamp_switch.flipDown(); // -> 'The light is off'

player_switch.flipUp();   // -> 'The music is on'
player_switch.flipDown(); // -> 'The music is off'




