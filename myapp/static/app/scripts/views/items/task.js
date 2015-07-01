define([
  'marionette',
  'tpl!templates/items/task.tpl'
], function(Marionette, tpl) {
  'use strict';

  return Marionette.ItemView.extend({

    tagName : 'li',
    className : 'task-item',
    initialize: function(){
      // never mind,i prefer the "dom:refresh" to "render" event
      this.listenTo(this,'dom:refresh',this.updateAttributes);
    },

    attributes : {
      'name' : function() { return 'task-' + this.model.get('id') }
    },
    template : tpl,
    events : {
      'click .delete-button' : 'delete'
    },
    delete : function() {
      this.model.destroy();
    }

  });

})
