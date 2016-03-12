import Ember from 'ember';
import highlightjs from 'npm:highlight.js';

const { Component } = Ember;
const { highlightBlock } = highlightjs;

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    highlightBlock(this.$('pre')[0]);
  }
});
