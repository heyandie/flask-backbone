define([
  'marionette',
  'views/composites/tasks',
  'tpl!templates/layouts/taskList.tpl',
  'models/task'

], function(Marionette, TaskCompositeView, tpl, TaskModel) {

  var instance = null;
  var taskListView = Marionette.LayoutView.extend({

    template : tpl,
    regions : {
      taskCollection: '.task-collection-region'
    },

    onShow : function() {

      var taskComposite = new TaskCompositeView();
      taskComposite.collection.add(new TaskModel({id: 1, title: "Take a rest."}));
      this.taskCollection.show(taskComposite);
    }

  });

  return taskListView;

});
