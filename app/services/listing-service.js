import Ember from 'ember';

const {
  Service,
  String: { w }
} = Ember;

export default Service.extend({
  components: ['lf-form', 'lf-input', 'lf-textarea', 'lf-select'],
  validators: w(
    `required requiredUnlessData accepted alpha alphanumeric numeric decimal in notIn between
    max min size regex same different url email`
  )
});
