import Ember from 'ember';

const { Route, inject: { service }} = Ember;

export default Route.extend({
  store: service(),

  model() {
    return this.get('store').findAll('validator');
  }
});
