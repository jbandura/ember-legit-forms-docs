import Ember from 'ember';
import Component from 'ember-component';

export default Component.extend({
  actions: {
    clicked(val) {
      this.set('selectedGender', val);
      this.get('update')(val);
    }
  }
});
