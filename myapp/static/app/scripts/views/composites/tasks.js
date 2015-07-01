define([
  'marionette',
  'views/items/task',
  'models/tasks',
  'tpl!templates/composites/tasks.tpl'
], function(Marionette, TaskView, TaskCollectionModel, tpl) {
  'use strict';

  var taskCompositeView = Marionette.CompositeView.extend({
    template: tpl,
    childView : TaskView,
    childViewContainer : '.tasks',
    initialize : function() {
      this.collection = new TaskCollectionModel();
    },
    ui : {
      newTask: '[name="new_task"]'
    },
    events : {
      'keyup [name="new_task"]' : "onKeypressEnter"
    },
    onKeypressEnter : function(event) {
      var ENTER_KEY = 13;
      var taskText = this.ui.newTask.val().trim();

      if (event.which === ENTER_KEY && taskText) {
        this.collection.create({
          title: taskText
        });
        this.ui.newTask.val('');
      }
    },
    onAddChild: function(childView){
      childView.model.set({id: 2});
    }

  });

  return taskCompositeView;

});
