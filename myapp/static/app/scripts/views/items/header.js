define([
  'marionette',
  'tpl!templates/items/header.tpl'
], function(Marionette, tpl) {
  'use strict';

  var instance = null;
  var header = Marionette.ItemView.extend({
    template : tpl
  });

  return header;
});
