import Ember from 'ember';
import ScrollToTopMixin from 'ember-legit-forms-docs/mixins/scroll-to-top';

const { Route, inject: { service }} = Ember;

export default Route.extend(ScrollToTopMixin, {
  store: service(),

  model() {
    return this.get('store').findAll('validator');
  }
});
