import Ember from 'ember';
import { subpages } from 'ember-legit-forms-docs/constants/content';

const { Component, inject: { service }, computed } = Ember;

export default Component.extend({
  mobileTrigger: service(),
  version: 'v1-1-4',
  versions: [
    { label: "1.1.4", value: 'v1-1-4' },
    { label: "2.0", value: 'v2-0-0' },
  ],
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

