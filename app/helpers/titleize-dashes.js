import Ember from 'ember';

const { String: { capitalize } } = Ember;

export function titleizeDashes([str]) {
  let routeStr = str;
  if (routeStr.indexOf('.') > 0) {
    routeStr = routeStr.split('.').map((routeLevel => capitalize(routeLevel))).join(' :: ');
  }

  return routeStr
    .split('-')
    .map(item => capitalize(item))
    .join(' ');
}

export default Ember.Helper.helper(titleizeDashes);

