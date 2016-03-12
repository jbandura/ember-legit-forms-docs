import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  model: Ember.Object.create({
    firstName: ''
  }),
  // rules hash for validation
  rules: {
    firstName: 'required'
  }
});
