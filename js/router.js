App.Router.map(function () {
  this.resource('app', { path: '/' });
});

App.AppRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('slide');
  }
});