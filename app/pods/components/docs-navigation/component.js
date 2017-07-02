import Ember from 'ember';
import { subpages } from 'ember-legit-forms-docs/constants/content';

const { Component, inject: { service }, computed } = Ember;

export default Component.extend({
  mobileTrigger: service(),
  version: null,
  versions: computed(function() {
    return Object.keys(subpages).map((versionStr) => {
      const label = versionStr.replace('v', '').replace(/-/g, '.');
      return { label, value: versionStr }
    });
  }),
  pages: computed('version', function() {
    const version = this.get('version');
    return subpages[version];
  }),

  actions: {
    toggleMobileNav() {
      this.toggleProperty('mobileTrigger.mobileNavExpanded');
    },
    versionChanged(version) {
      this.get('onVersionChange')(version);
    }
  }
});

