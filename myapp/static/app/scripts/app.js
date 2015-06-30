define([
  'marionette',
  'views/items/header'
], function(Marionette, header) {
  'use strict';

  var app = new Marionette.Application();

  app.addRegions({
    header : "#header-region"
  });

  app.on('start', function() {
    Backbone.history.start();
    app.header.show(new header());
  });



  return app;
});
