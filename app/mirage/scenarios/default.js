import validators from 'ember-legit-forms-docs/utils/fixtures/validators';
export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  validators.forEach((v) => {
    server.create('validator', v);
  });
}
