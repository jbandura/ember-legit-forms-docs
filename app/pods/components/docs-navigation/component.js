import Ember from 'ember';

const { Component, inject: { service } } = Ember;

export default Component.extend({
  mobileTrigger: service(),
  actions: {
    toggleMobileNav() {
      this.toggleProperty('mobileTrigger.mobileNavExpanded');
    }
  }
});

