import Ember from 'ember';

const {
  Component,
  computed,
  getProperties
} = Ember;

export default Component.extend({
  tagName: 'nav',
  navigationPrefix: 'docs',
  nextRoute: '', //passed in
  prevRoute: '', //passed in

  prevRouteName: computed('navigationPrefix', 'prevRoute', 'version', function() {
    const { navigationPrefix, prevRoute, version } = getProperties(this, 'navigationPrefix', 'prevRoute', 'version');
    const prevRouteName = prevRoute ? `.${prevRoute}` : '';
    return `${navigationPrefix}.${version}${prevRouteName}`;
  }),

  nextRouteName: computed('navigationPrefix', 'prevRoute', 'version', function() {
    const { navigationPrefix, nextRoute, version } = getProperties(this, 'navigationPrefix', 'nextRoute', 'version');
    const nextRouteName = nextRoute ? `.${nextRoute}` : '';
    return `${navigationPrefix}.${version}${nextRouteName}`;
  }),
});
