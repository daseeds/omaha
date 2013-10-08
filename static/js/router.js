App.Router.map(function () {
    this.resource('pages', { path: '/:lang_id' }, function() {
      this.route('page', { path: '/:page_id' });
    });      
//		this.route('manor', { path: '/bed-and-breakfeast-manor-in-normandy'});
//		this.route('garden', { path: '/bed-and-breakfeast-manor-in-normandy-garden' });


});

//Debug
App.routes = Ember.keys(App.Router.router.recognizer.names);

App.ApplicationRoute  = Em.Route.extend({
  model: function() {
    return this.store.find('lang');
  }
});

/*App.LangsIndexRoute  = Em.Route.extend({
  model: function() {
    return this.store.find('lang');
  }
});*/

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('pages.index', 'en');
  }
});

/*App.PagesIndexRoute = Em.Route.extend({
  model: function(params) {
    console.log(params.lang_id);
    return this.store.find('page', params.lang_id);
  }
});*/

App.PagesPageRoute = Em.Route.extend({
  model: function(params) {
    return this.modelFor('lang').pages.findBy('id', params.page_id);
  }
});

/*App.LangsIndexRoute  = Em.Route.extend({
  model: function() {
    return this.modelFor('langs');
  }
});*/


/*App.LangIndexRoute = Em.Route.extend({
  model: function(params) {
    console.log("App.LangIndexRoute");
    console.log(params.lang_id);
    return this.store.find('lang', params.lang_id);
    console.log("finished");
  }
});

App.PageRoute = Em.Route.extend({
  model: function(params) {
    console.log("App.PageRoute");
    console.log(params.page_id);
    return this.store.find('page', params.page_id);
  }
});*/


// App.ManorRoute = Ember.Route.extend({
// 	model:function () {
//     return this.store.find('Presentation', 1);
//     //return {title: 'test'};
//   },

//   setupController: function(controller) {

//     //controller.set('model', presentation);
//     //controller.set('manor', this.store.find('Presentation', 1));
//     $.backstretch([     "static/img/entree.jpg",   "static/img/L1014010-2.jpg"    ], {duration: 10000});
//   },
//   renderTemplate: function(controller){
//     this.render('base1', {controller: controller});
// }
// });

// App.GardenRoute = Ember.Route.extend({
//   model:function () {
//     return this.store.find('Presentation', 2);
//     //return {title: 'test'};
//   },  
//   setupController: function(controller) {


//     $.backstretch([  "static/img/DSC_0403.JPG", "static/img/la_tour_1_1_.JPG"    ], {duration: 10000});
//   },
//   renderTemplate: function(controller){
//     this.render('base1', {controller: controller});
// }
// });

/*App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('lang.index');
  }
});*/