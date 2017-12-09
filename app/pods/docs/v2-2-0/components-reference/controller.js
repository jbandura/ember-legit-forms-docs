import Ember from 'ember';
import CurrentServiceProvider from 'ember-legit-forms-docs/mixins/current-service-provider';

const { Controller, computed, inject: { service } } = Ember;

export default Controller.extend(CurrentServiceProvider, {
  listingService: service(),
  components: computed.alias('listingService.components')
});
