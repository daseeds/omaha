window.App = Ember.Application.create({
  VERSION: '1.0',
  ready: function() {
    //initialize router, controller and views
    
    $.backstretch([   "static/img/la_tour_1_1_.JPG",   "static/img/entree.jpg",   "static/img/L1014010-2.jpg"    ], {duration: 10000});

  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();