import Ember from 'ember';

const {
  Controller,
  computed,
  inject: { service }
} = Ember;

export default Controller.extend({
  listingService: service(),
  validatorsCol1: computed('listingService.validators', function() {
    return this.get('listingService.validators').slice(0, 8);
  }),
  validatorsCol2: computed('listingService.validators', function() {
    return this.get('listingService.validators').slice(8);
  }),
});
