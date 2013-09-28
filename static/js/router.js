App.Router.map(function () {
		this.route('manor', { path: '/bed-and-breakfeast-manor-in-normandy'});
		this.route('garden', { path: '/bed-and-breakfeast-manor-in-normandy-garden' });


});

App.ManorRoute = Ember.Route.extend({
	model:function () {
    return this.store.find('Presentation', 1);
    //return {title: 'test'};
  },

  setupController: function(controller) {

    //controller.set('model', presentation);
    //controller.set('manor', this.store.find('Presentation', 1));
    $.backstretch([     "static/img/entree.jpg",   "static/img/L1014010-2.jpg"    ], {duration: 10000});
  },
  renderTemplate: function(controller){
    this.render('base1', {controller: controller});
}
});

App.GardenRoute = Ember.Route.extend({
  model:function () {
    return this.store.find('Presentation', 2);
    //return {title: 'test'};
  },  
  setupController: function(controller) {


    $.backstretch([  "static/img/DSC_0403.JPG", "static/img/la_tour_1_1_.JPG"    ], {duration: 10000});
  },
  renderTemplate: function(controller){
    this.render('base1', {controller: controller});
}
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('manor');
  }
});