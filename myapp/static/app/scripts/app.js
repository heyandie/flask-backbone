define([
  'marionette',
  'views/items/header',
  'views/layouts/taskList',
  'models/task',
  'models/tasks'
], function(Marionette, Header, TaskListView, Task, TaskCollection) {
  'use strict';

  var app = new Marionette.Application();

  app.addRegions({
    header : "#header-region",
    main : "#main-region"
  });

  app.on('start', function() {
    Backbone.history.start();
    app.header.show(new Header());
    app.main.show(new TaskListView());
  });



  return app;
});
