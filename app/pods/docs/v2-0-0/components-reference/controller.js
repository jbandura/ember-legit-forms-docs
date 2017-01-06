import Ember from 'ember';

const { Controller, computed, inject: { service } } = Ember;

export default Controller.extend({
  listingService: service(),
  components: computed.alias('listingService.components')
});
