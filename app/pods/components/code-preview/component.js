import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  selectedTab: null,
  triggerOptions: computed('triggers', function() {
    return this.get('triggers').split(',');
  }),

  actions: {
    tabSelected(name) {
      this.set('selectedTab', name);
    }
  }
});
