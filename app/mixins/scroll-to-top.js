import Ember from 'ember';

const { Mixin, inject: { service } } = Ember;

export default Mixin.create({
  mobileTrigger: service(),
  activate() {
    this._super(...arguments);
    window.scrollTo(0,0);
    this.set('mobileTrigger.mobileNavExpanded', false);
  }
});
