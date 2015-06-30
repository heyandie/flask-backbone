"use strict";

require.config({
  paths: {
    jquery : "../../bower_components/jquery/dist/jquery",
    tpl : "../../bower_components/requirejs-tpl/tpl",
    underscore : "../../bower_components/underscore/underscore",
    backbone : "../../bower_components/backbone/backbone",
    marionette : "../../bower_components/marionette/lib/backbone.marionette",
    "backbone.wreqr" : "../../bower_components/backbone.wreqr/lib/backbone.wreqr",
    "backbone.babysitter" : "../../bower_components/backbone.babysitter/lib/backbone.babysitter"
  }
})


require([
  "app"
], function (app) {
  'use strict'

  app.start();

});
