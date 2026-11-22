// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Checkbox } from '@interlink/react/checkbox';
import { CheckboxField, ErrorMessage, Field, Form, FormFooter, FormHeader, HelperMessage } from '@interlink/react/form';

/** Title: Form with validation */
export default function Example() {
  return (
    <Form onSubmit={() => undefined}>
      {({ formProps, submitting }) => (
        <form {...formProps} style={{ maxWidth: '24rem' }}>
          <FormHeader title="Create project" description="Required fields are marked with an asterisk." />
          <Field name="name" label="Project name" isRequired>
            {({ fieldProps, error }) => (
              <>
                <TextField {...fieldProps} />
                {error ? <ErrorMessage>{error}</ErrorMessage> : <HelperMessage>Use a name your team will recognise.</HelperMessage>}
              </>
            )}
          </Field>
          <CheckboxField name="private">
            {({ fieldProps }) => <Checkbox {...fieldProps} label="Make this project private" />}
          </CheckboxField>
          <FormFooter>
            <Button appearance="subtle">Cancel</Button>
            <Button type="submit" appearance="primary" isLoading={submitting}>Create project</Button>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
