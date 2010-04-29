/**
 * Mediator
 *
 * Incapsulates the logic of interaction between several objects.
 * Promotes loose coupling by keeping the objects from referring
 * each other directly
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Dialog = new Class({
  initialize: function(element) {
    this.label         = element.first('label');
    this.createButton  = element.first('button.create');
    this.previewButton = element.first('button.preview');
  },
  
  createMode: function() {
    this.label = "Create";
    this.createButton.hide();
    this.previewButton.show();
  },
  
  previewMode: function() {
    this.label = "Preview";
    this.createButton.show();
    this.previewButton.hide();
  }
});