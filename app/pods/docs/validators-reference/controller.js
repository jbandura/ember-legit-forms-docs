import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  validatorsCol1: computed('model', function() {
    return this.get('model').slice(0, 9);
  }),
  validatorsCol2: computed('model', function() {
    return this.get('model').slice(9);
  }),
});
