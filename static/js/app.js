window.App = Ember.Application.create({
  VERSION: '1.0',
  ready: function() {
    //initialize router, controller and views
   
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ManorController = Ember.ObjectController.extend({


});

App.ApplicationController = Ember.ObjectController.extend({
  lang_id: 'en'
});