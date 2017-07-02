import Ember from 'ember';

const { Route, inject: { service } } = Ember;

export default Route.extend({
  store: service(),
  model({ validator_name }) {
    const model = this.get('store').queryRecord('validator', { name: validator_name });
    console.log(model);
    return model;
  }
});
