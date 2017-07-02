import Ember from 'ember';
import { validators } from 'ember-legit-forms-docs/constants/content';

const {
  Controller,
  computed,
} = Ember;

export default Controller.extend({
  version: "v1-1-4",
  validators: computed('version', function() {
    return validators[this.get('version')];
  }),
  validatorsCol1: computed(function() {
    return this.get('validators').slice(0, 8);
  }),
  validatorsCol2: computed(function() {
    return this.get('validators').slice(8);
  }),
});
