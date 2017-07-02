import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  text: null,
  model: Ember.Object.create({
    firstName: ''
  }),
  formData: {
    firstName: null,
  },
  // rules hash for validation
  rules: {
    firstName: 'required'
  },
  
  actions: {
    textInput(isValid, value) {
      this.set('text', true);
      this.set('model.firstName', this.get('formData.firstName'));
    }
  }
});
