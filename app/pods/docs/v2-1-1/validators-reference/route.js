import Ember from 'ember';
import ScrollToTopMixin from 'ember-legit-forms-docs/mixins/scroll-to-top';

const { Route, inject: { service }} = Ember;

export default Route.extend(ScrollToTopMixin);
