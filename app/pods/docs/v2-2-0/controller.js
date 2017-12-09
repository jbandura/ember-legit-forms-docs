import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  actualVersionService: service(),
  actions: {
    onVersionChange(version) {
      this.set('actualVersionService.currentVersion', version);
      this.transitionToRoute(`docs.${version}.installing`);
    }
  }
});
