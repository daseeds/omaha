App.Router.map(function () {
  this.resource('locale', { path: '/:locale_id' }, function() {
    this.resource('page', { path: '/:page_id' });
  });
   
});

//Debug
App.routes = Ember.keys(App.Router.router.recognizer.names);

App.Locale = Em.Object.extend();

App.Locale.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return App.Locale.find();
  },
  afterModel: function(model, transition) {
      this.transitionTo('locale', model[0]);
    }
});

App.LocaleRoute  = Em.Route.extend({
  model: function(params) {
    return App.Locale.find(params.locale_id);
  },
/*  afterModel: function(model, transition) {
      this.transitionTo('page', model[0]);
    }*/
});

App.PageController = Ember.ObjectController.extend({
  ready: function() {
    console.log('activate )' + model.toArray());
  }
});

App.PageRoute = Em.Route.extend({
  model: function(params) {
    console.log("params.page_id: " + params.page_id);
    var model = this.modelFor('locale').pages.findBy('id', params.page_id);

    $.backstretch([model.pictures[0].path, model.pictures[1].path]);

    return model;
  }
});


