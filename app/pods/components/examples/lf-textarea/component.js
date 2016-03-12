import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  foo: '',
  rules: {
    foo: 'required'
  }
});
