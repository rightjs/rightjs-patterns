/**
 * Observer
 *
 * Creates an object to which some listeners can subscribe and
 * when the object changes it's state all the subscribed
 * listeners will be notified
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// RightJS has a built in `Observer` unit which already implements the pattern

var MyObserver = new Class(Observer, {
  
});

var my_observer = new MyObserver();

// attaching the listeners
my_observer.on('event', function(value) {
  console.log("Listener 1", value);
});

my_observer.on('event', function(value) {
  console.log("Listener 2", value);
});

my_observer.on('event', function(value) {
  console.log("Listener 3", value);
});


// firing the event
my_observer.fire('event', 'some value');

// will log string like that
//   'Listener 1', 'some value'
//   'Listener 2', 'some value'
//   'Listener 3', 'some value'

// See the documentation on the official cite for more information on the unit