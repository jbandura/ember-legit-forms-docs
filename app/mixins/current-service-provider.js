import Ember from 'ember';

const { Mixin, inject: { service } } = Ember;

export default Mixin.create({
  actualVersionService: service(),
});
