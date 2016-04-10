import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'nav',
  navigationPrefix: 'docs',
  nextRoute: null, //passed in
  prevRoute: null, //passed in
});
