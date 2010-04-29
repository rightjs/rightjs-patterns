/**
 * Proxy
 *
 * Provides a surrogate for another object to access control to it
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var Dialog = new Class({
  
  initialize: function(element) {
    this.element = element;
  },
  
  close: function() {
    this.element.hide();
  }
  
});

var DialogProxy = new Class(Dialog, {
  close: function() {
    if (confirm("Are you sure?"))
      this.$super();
  }
});
