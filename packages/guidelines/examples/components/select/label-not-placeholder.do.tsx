// SPDX-License-Identifier: Apache-2.0
import { Field, Form, HelperMessage } from '@interlink/react/form';
import { Select, type SelectValue } from '@interlink/react/select';

export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Form onSubmit={() => undefined}>
        <Field<SelectValue> name="work-items" label="Work items" defaultValue={null}>
          {({ fieldProps }) => (
            <>
              <Select {...fieldProps} isMulti options={[{ label: 'Design review', value: 'design-review' }, { label: 'Release notes', value: 'release-notes' }, { label: 'Onboarding', value: 'onboarding' }]} />
              <HelperMessage>Choose every work item linked to this request.</HelperMessage>
            </>
          )}
        </Field>
      </Form>
    </div>
  );
}
