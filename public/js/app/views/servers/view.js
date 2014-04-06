define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      Marionette          = require('marionette'),
      Mods                = require('app/collections/mods'),
      InfoView            = require('app/views/servers/info'),
      ModsListView        = require('app/views/mods/list'),
      tpl                 = require('text!tpl/servers/view.html');

  return Marionette.Layout.extend({
    template: _.template(tpl),

    regions: {
      info: "#tab-info",
      mods: "#tab-mods",
      settings: "#tab-settings"
    },

    events: {
      "click .nav-tabs a" : "tabs",
    },

    onRender: function() {
      this.info.show(new InfoView({model: this.model}));
      this.mods.show(new ModsListView({collection: new Mods(this.model.get('mods'))}));
    },

    tabs: function(e) {
      e.preventDefault()
      $($(e.target).attr('href')).tab('show')
    },
  });

});
