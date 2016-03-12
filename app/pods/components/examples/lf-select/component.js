import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  foo: '',
  fields: [
    { label: 'Foo option', value: 'foo' },
    { label: 'Bar option', value: 'bar'}
  ],
  rules: {
    foo: 'required'
  }
});
