export default [
  {
    id: 1,
    name: 'required',
    'locales-key': 'required',
    'default-message': "can't be blank",
    description: "Checks whether given field is filled in (uses <code>Ember.isNone</code>).",
    usage: "firstname: 'required'"
  },
  {
    id: 2,
    name: 'accepted',
    'locales-key': 'mustBeAccepted',
    'default-message': 'must be accepted',
    description: 'Checks if field value is equal to <code>1</code>, <code>"1"</code>, <code>true</code> or <code>"on"</code>.',
    usage: "termsOfService: 'accepted'",
  },
  {
    id: 3,
    name: 'alpha',
    'locales-key': 'mustBeAlpha',
    'default-message': 'must consist only of alphabetic characters',
    description: "Checks if field value consists only of alphabetic characters.",
    usage: "firstName: 'alpha'"
  },
  {
    id: 4,
    name: 'alphanumeric',
    'locales-key': 'mustBeAlphanumeric',
    'default-message': 'must consist only of alphanumeric characters',
    description: 'Checks if field value consists only of alphanumeric characters.',
    usage: "nickname: 'alphanumeric'"
  },
  {
    id: 5,
    name: 'numeric',
    'locales-key': 'mustBeNumeric',
    'default-message': 'must be a number',
    description: 'Checks if field value consists only of numeric characters.',
    usage: "phone: 'numeric'",
  },
  {
    id: 6,
    name: 'in',
    'locales-key': 'mustBeInArray',
    'default-message': 'value not allowed',
    description: 'Checks if the field value is contained in the whitelist.',
    usage: `field: 'in(foo,bar,baz)' // value can only be "foo", "bar" or "baz"`
  },
  {
    id: 7,
    name: 'notIn',
    'locales-key': 'mustBeNotInArray',
    'default-message': 'value not allowed',
    description: 'Field value must not be contained in the arguments array.',
    usage: `field: 'notIn(foo,bar,baz)' // value must not be "foo", "bar" or "baz"`
  },
  {
    id: 8,
    name: 'between',
    'locales-key': 'mustBeBetween',
    'default-message': 'must be between {{minLength}} and {{maxLength}}',
    description: 'Checks if max >= value.length >= min.',
    usage: "name: 'between(3,5)' // min = 3, max = 5"
  },
  {
    id: 9,
    name: 'max',
    'locales-key': 'tooLong',
    'default-message': 'too long',
    description: 'Checks if value.length <= max.',
    usage: "name: 'max(3)'"
  },
  {
    id: 10,
    name: 'min',
    'locales-key': 'tooShort',
    'default-message': 'too short',
    description: 'Checks if value.length >= min.',
    usage: "name: 'min(3)'"
  },
  {
    id: 11,
    name:'size',
    'locales-key': 'mustBeOfSize',
    'default-message': 'must be exactly {{size}} characters long',
    description: "Checks if field value length is equal to size.",
    usage: "number: 'size(8)'"
  },
  {
    id: 12,
    name: 'regex',
    'locales-key': 'mustMatchRegex',
    'default-message': 'must have a proper format',
    description: "Checks if field value matches regex. Note: the object representation is recommended for this validator",
    usage: "name: { regex: /^Foo(.*)/ } // must begin with Foo"
  },
  {
    id: 13,
    name: 'same',
    'locales-key': 'mustBeSame',
    'default-message': 'must match {{fieldName}}',
    description: 'Checks if field value is equal to value of fieldName.',
    usage: `
      password: 'required|min(8)',
      passwordConfirmation: 'same(password)'
    `
  },
  {
    id: 14,
    name: 'different',
    'locales-key': 'mustBeDifferent',
    'default-message': 'must be different than {{fieldName}}',
    description: 'Checks if field value is different than value of fieldName.',
    usage: `
      registeredAddress: 'required',
      corespondenceAddress: 'different(registeredAddress)'
    `
  },
  {
    id: 15,
    name: 'url',
    'locales-key': 'mustBeValidURL',
    'default-message': 'must be a valid URL',
    description: 'Checks if field value is a valid URL address.',
    usage: "website: 'url'"
  },
  {
    id: 16,
    name: 'email',
    'locales-key': 'mustBeValidEmail',
    'default-message': 'must be a valid email address',
    description: 'Checks if field value is an valid email address.',
    usage: "email: 'email'"
  }
];
