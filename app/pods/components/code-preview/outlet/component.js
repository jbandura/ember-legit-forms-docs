import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  visible: computed('selected', 'name', function() {
    return this.get('name') === this.get('selected');
  })
});
