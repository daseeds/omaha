App.Router.map(function () {
    this.resource('langs', { path: '/' }, function() {
      this.resource('pages', { path: '/:lang_id' }, function() {
        this.route('page', { path: '/:page_id' });
      });
    });      
//		this.route('manor', { path: '/bed-and-breakfeast-manor-in-normandy'});
//		this.route('garden', { path: '/bed-and-breakfeast-manor-in-normandy-garden' });


});

//Debug
App.routes = Ember.keys(App.Router.router.recognizer.names);

App.Lang = Em.Object.extend();

App.Lang.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});

App.LangsRoute  = Em.Route.extend({
  model: function() {
    return App.Lang.find();
  }
});

App.PagesRoute  = Em.Route.extend({
  model: function(params) {
    return App.Lang.find(params.lang_id);
  }
});

App.PagesPageController = Ember.ObjectController.extend({
  activate: function() {
    console.log('activate ' + model.toArray());
  }
});

App.PagesPageRoute = Em.Route.extend({
  model: function(params) {
    console.log("params.page_id: " + params.page_id);
    return App.Lang.find('id', params.page_id);
    return this.modelFor('lang').pages.findBy('id', params.page_id);
  }
});

/*App.LangsRoute  = Em.Route.extend({
  model: function() {
    return this.store.find('lang');
  }
});

App.PagesRoute = Em.Route.extend({
  model: function(params) {
    console.log("params.lang_id: " + params.lang_id);
    this.store.find('lang', params.lang_id).then(function(stuff){console.log("store: " + stuff.toArray())});
    //return this.modelFor('langs').findBy('id', 'en');
    //return this.store.findAll('page', params.lang_id);
    //return this.store.find('lang', params.lang_id);
    return this.store.findById('lang', params.lang_id);
  }
});

App.PagesPageRoute = Em.Route.extend({
  model: function(params) {
    console.log("params.page_id: " + params.page_id);
    return this.modelFor('lang').pages.findBy('id', params.page_id);
  }
});*/

