import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  rules: {},
  errors: {},

  actions: {
    onFillWithErrors() {
      this.set('errors', {
        firstName: ["can't be blank"]
      });
    }
  }
});
