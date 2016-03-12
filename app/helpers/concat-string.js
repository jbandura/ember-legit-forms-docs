import Ember from 'ember';

export function concatString([str1, str2], {separator} = {}) {
  let strSeparator = separator || "";
  return `${str1}${strSeparator}${str2}`;
}

export default Ember.Helper.helper(concatString);

