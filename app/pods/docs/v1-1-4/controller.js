import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    onVersionChange(version) {
      this.transitionToRoute(`docs.${version}.installing`);
    }
  }
});
