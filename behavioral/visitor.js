/**
 * Visitor
 *
 * Separates a handling algorithm from an actual object,
 * so that you could create new algorithms without changing
 * the original object
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
var Car = new Class({
  initialize: function(options) {
    this.wheels = options.wheels;
    this.engine = options.engine;
    this.body   = options.body;
  },
  
  visitBy: function(visitor) {
    visitor.visit(this);
  },
  
  show: function() {
    return "I have: " +
      this.wheels + " wheels, " +
      this.engine + " engine and " +
      this.body   + " body";
  }
});

// definging some visitors
var CarVisitor = new Class({
  visit: function(car) {
    throw "Abstract method";
  }
});

var SportCarVisitor = new Class(Visitor, {
  visit: function(car) {
    car.wheels = 'sport';
    car.engine = 'loud';
    car.body   = 'light';
  }
});

var GirlsCarVisitor = new Class(Visitor, {
  visit: function(car) {
    car.wheels = 'glossy';
    car.engine = 'quiet';
    car.body   = 'pink';
  }
});

// application test
var car = new Car({
  wheels: 'stock',
  engine: 'stock',
  body:   'stock'
});

var sport_car_mechanic = new SportCarVisitor();
var girls_car_mechanic = new GirlsCarVisitor();

car.visitBy(sport_car_mechanic);
car.show(); // -> "I have: sport wheels, loud engine and light body"

car.visitBy(girls_car_mechanic);
car.show(); // -> "I have: glossy wheels, quied engine and pink body"
