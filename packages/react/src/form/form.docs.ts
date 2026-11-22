// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { FormProps } from './form';

export const formDocs = docsFor<FormProps>({
  name: "Form",
  package: '@interlink/react/form',
  exports: ["Form", "Field", "CheckboxField", "Fieldset", "FormHeader", "FormSection", "FormFooter", "HelperMessage", "ErrorMessage", "ValidMessage", "Label", "RequiredAsterisk"],
  description: "A form collects information through a set of fields and submits it together.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["form", "field", "validation", "submit", "label"],
  props: {
    onSubmit: {"type": "(values) => errors | void | Promise", "description": "Receives all values. Return field errors to show them in place."},
    children: {"type": "(props) => ReactNode | ReactNode", "description": "A render function receiving formProps, or fields placed inside a form element."},
    isDisabled: {"type": "boolean", "description": "Disables every field and blocks submit.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
