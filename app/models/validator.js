import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  localesKey: attr('string'),
  defaultMessage: attr('string'),
  description: attr('string'),
  usage: attr('string'),
});
