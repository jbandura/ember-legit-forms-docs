import Ember from 'ember';

const { String: { w } } = Ember;

const components = {
  "v1-1-4": w('lf-form lf-input lf-textarea lf-select'),
  "v2-0-0": w('lf-form lf-input lf-textarea lf-select'),
  "v2-1-1": w('lf-form lf-input lf-textarea lf-select'),
  "v2-2-0": w('lf-form lf-input lf-textarea lf-select'),
};

const validators = {
  "v1-1-4": w(
    `required required-unless-data accepted alpha alphanumeric numeric in not-in between max min size
    regex same different url email`
  ),
  "v2-0-0": w(
    `required required-unless-data accepted alpha alphanumeric numeric decimal in not-in between max min size
    regex same different url email`
  ),
  "v2-1-1": w(
    `required required-unless-data accepted alpha alphanumeric numeric decimal in not-in between max min size
    regex same different url email`
  ),
  "v2-2-0": w(
    `required required-unless-data accepted alpha alphanumeric numeric decimal in not-in between max min size
    regex same different url email`
  ),
};

const subpages = {
  "v1-1-4": [
    {
      title: "General",
      subpages: [
        { title: "Installing", route: "installing"},
        { title: "Getting Started", route: "getting-started"},
        { title: "Components Reference", route: "components-reference", reference: "components" },
        { title: "Customizing Wrapper Markup", route: "customizing-wrapper-markup"},
        { title: "Credits", route: "credits"},
      ]
    },
    {
      title: "Validators",
      subpages: [
        { title: 'Validators', route: 'validators' },
        { title: 'Representing Validators', route: 'validators.representing-validators' },
        { title: 'Messages', route: 'validators.messages' },
        { title: 'Shared Validations', route: 'validators.shared-validations' },
        { title: 'Creating Custom Validators', route: 'validators.creating-custom-validators' },
        { title: 'Defining Inline Validators', route: 'validators.defining-inline-validators' },
        { title: 'Validators Reference', route: 'validators-reference', reference: 'validators' },
      ],
    }
  ],
  "v2-0-0": [
    {
      title: "General",
      subpages: [
        { title: "Installing", route: "installing"},
        { title: "Getting Started", route: "getting-started"},
        { title: "Components Reference", route: "components-reference", reference: "components" },
        { title: "Customizing Wrapper Markup", route: "customizing-wrapper-markup"},
        { title: "Showing External Errors", route: "showing-external-errors" },
        { title: "Testing", route: "testing" },
        { title: "Credits", route: "credits"},
      ]
    },
    {
      title: "Validators",
      subpages: [
        { title: 'Validators', route: 'validators' },
        { title: 'Representing Validators', route: 'validators.representing-validators' },
        { title: 'Messages', route: 'validators.messages' },
        { title: 'Shared Validations', route: 'validators.shared-validations' },
        { title: 'Creating Custom Validators', route: 'validators.creating-custom-validators' },
        { title: 'Defining Inline Validators', route: 'validators.defining-inline-validators' },
        { title: 'Validators Reference', route: 'validators-reference', reference: 'validators' },
      ],
    }
  ],
  "v2-1-1": [
    {
      title: "General",
      subpages: [
        { title: "Installing", route: "installing"},
        { title: "Getting Started", route: "getting-started"},
        { title: "Components Reference", route: "components-reference", reference: "components" },
        { title: "Customizing Markup", route: "customizing-markup" },
        { title: "Showing External Errors", route: "showing-external-errors" },
        { title: "Creating custom inputs", route: "creating-custom-inputs" },
        { title: "Testing", route: "testing" },
        { title: "Credits", route: "credits"},
      ]
    },
    {
      title: "Validators",
      subpages: [
        { title: 'Validators', route: 'validators' },
        { title: 'Representing Validators', route: 'validators.representing-validators' },
        { title: 'Messages', route: 'validators.messages' },
        { title: 'Shared Validations', route: 'validators.shared-validations' },
        { title: 'Computed Rules', route: 'validators.computed-rules' },
        { title: 'Creating Custom Validators', route: 'validators.creating-custom-validators' },
        { title: 'Defining Inline Validators', route: 'validators.defining-inline-validators' },
        { title: 'Validators Reference', route: 'validators-reference', reference: 'validators' },
      ],
    }
  ],
  "v2-2-0": [
    {
      title: "General",
      subpages: [
        { title: "Installing", route: "installing"},
        { title: "Getting Started", route: "getting-started"},
        { title: "Components Reference", route: "components-reference", reference: "components" },
        { title: "Customizing Markup", route: "customizing-markup" },
        { title: "Showing External Errors", route: "showing-external-errors" },
        { title: "Creating custom inputs", route: "creating-custom-inputs" },
        { title: "Using with ember-changeset", route: "using-with-ember-changeset" },
        { title: "Testing", route: "testing" },
        { title: "Credits", route: "credits"},
      ]
    },
    {
      title: "Validators",
      subpages: [
        { title: 'Validators', route: 'validators' },
        { title: 'Representing Validators', route: 'validators.representing-validators' },
        { title: 'Messages', route: 'validators.messages' },
        { title: 'Shared Validations', route: 'validators.shared-validations' },
        { title: 'Computed Rules', route: 'validators.computed-rules' },
        { title: 'Creating Custom Validators', route: 'validators.creating-custom-validators' },
        { title: 'Defining Inline Validators', route: 'validators.defining-inline-validators' },
        { title: 'Validators Reference', route: 'validators-reference', reference: 'validators' },
      ],
    }
  ]
};

export { validators, subpages, components };
