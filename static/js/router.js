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
/*  afterModel: function(model, transition) {
      this.transitionTo('locale', model[0]);
    },*/
/*  setupController: function(controller, model) {
    console.log(model); 
  }*/
});

App.LocaleRoute  = Em.Route.extend({
  model: function(params) {
    return App.Locale.find(params.locale_id);
  },
  afterModel: function(model, transition) {
    console.log("App.LocaleRoute:afterModel " + model);
      //this.transitionTo('page', model.pages[0]);
  }
/*  setupController: function(controller, model) {
    console.log(model); 
  }*/
});

App.ApplicationController = Em.ArrayController.extend({
  destinationRoute: 'target'

});


App.LocaleController = Ember.ObjectController.extend({
  needs: "page",
  page: Ember.computed.alias("controllers.page"),
  isVisible: true
});


App.PageController = Ember.ObjectController.extend({
  needs: "locale",
  locale: Ember.computed.alias("controllers.locale"),
  ready: function() {
    console.log('activate )' + model.toArray());
  }
});

App.PageRoute = Em.Route.extend({
  model: function(params) {
    console.log("params.page_id: " + params.page_id);
    return this.modelFor('locale').pages.findBy('id', params.page_id);
  },
  actions: {
    willTransition: function(transition) {
      console.log("destroy backstretch before transition");
      $('body').backstretch("destroy", false);
     }
  },
  afterModel: function(model, transition) {
    var backStrechArrayParam = [];
    
    for (var i = 0; i < model.pictures.length; i++) {
      backStrechArrayParam[i] = model.pictures[i].path;
    }
    var instance = $('body').data('backstretch');
    if (instance != undefined)
      $('body').backstretch("destroy", true);

    $('body').backstretch(backStrechArrayParam, {duration: 3000, fade: 750});
    var instance = $('body').data('backstretch');
    if (instance != undefined)
      console.log("after: " + instance.images.toString());
  }
});


