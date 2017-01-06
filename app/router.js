import Ember from 'ember';
import config from './config/environment';
import ListService from 'ember-legit-forms-docs/services/listing-service';
import { subpages, components, validators } from 'ember-legit-forms-docs/constants/content';

const { String: { dasherize } } = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
});

const listing = { components, validators };

function generateRoutes() {
  Object.keys(subpages).forEach((version) => {
    this.route(version, function() {
      subpages[version].forEach((page) => {
        page.subpages.forEach((subpage) => {
          if(subpage.reference) {
            this.route(subpage.route, function() {
              listing[subpage.reference][version].forEach((item) => {
                this.route(item);
              });
            });
          } else {
            this.route(subpage.route);
          }
        });
      });
    });
  });
}

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('docs', function() {
    generateRoutes.apply(this);
  });

  this.route('examples');
});

export default Router;
