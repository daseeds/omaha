window.App = Ember.Application.create({
  VERSION: '1.0',
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true,
  ready: function() {
    //initialize router, controller and views
   	 
  }
});

// app.js
App.LoadingRoute = Ember.Route.extend({});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

/*App.store = DS.Store.extend({
	revision	: 12,
	adapter		: 'DS.FixtureAdapter'
});
*/