import Ember from 'ember';
import Changeset from 'ember-changeset';
import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';
import lookupValidator from 'ember-changeset-validations';

const { Component } = Ember;

export default Component.extend({
  user: {
    firstName: '',
    lastName: '',
  },
  UserValidations: {
    firstName: [
      validatePresence(true),
      validateLength({ min: 4 })
    ],
    lastName: validatePresence(true),
  },


  init() {
    this._super(...arguments);
    const user = this.get('user');
    this.changeset = new Changeset(user, lookupValidator(this.UserValidations), this.UserValidations);
  },

  actions: {
    onSubmit(changeset) {
      console.log('Action!')
    }
  }
});
