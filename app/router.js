import Ember from 'ember';
import config from './config/environment';
import ListService from 'ember-legit-forms-docs/services/listing-service';

const { String: { dasherize } } = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
});

const listService = ListService.create();

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('docs', function() {
    this.route('index', { path: '/'});
    this.route('installing');
    this.route('getting-started');
    this.route('components-reference', function() {
      listService.get('components').forEach((component) => {
        this.route(component);
      });
    });

    this.route('customizing-wrapper-markup');
    this.route('validators', function() {
      this.route('representing-validators');
      this.route('messages');
      this.route('shared-validations');
      this.route('creating-custom-validators');
      this.route('defining-inline-validators');
    });

    this.route('validators-reference', function() {
      listService.get('validators').forEach((validator) => {
        this.route(dasherize(validator));
      });
    });

    this.route('credits');
  });

  this.route('examples');
});

export default Router;
