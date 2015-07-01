define([
  'backbone',
  'models/task',
  'localStorage'
], function(Backbone, model) {
  'use strict';

  return Backbone.Collection.extend({
    model: model,
    localStorage: new Backbone.LocalStorage('tasksLocal')
  });
})
