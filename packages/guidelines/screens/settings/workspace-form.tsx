// SPDX-License-Identifier: Apache-2.0
'use client';
import { Button } from '@interlink/react/button';
import { Checkbox } from '@interlink/react/checkbox';
import { useFlags } from '@interlink/react/flag';
import { CheckboxField, ErrorMessage, Field, Form, FormFooter, FormHeader, FormSection, HelperMessage } from '@interlink/react/form';
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { RadioGroup } from '@interlink/react/radio';
import { SectionMessage } from '@interlink/react/section-message';
import { Select, type SelectValue } from '@interlink/react/select';
import { TextArea } from '@interlink/react/textarea';
import { TextField } from '@interlink/react/textfield';
import { Toggle } from '@interlink/react/toggle';
import { DeleteWorkspace } from './delete-workspace';

const ZONES = ['UTC', 'Africa/Nairobi', 'Europe/London', 'America/New_York', 'Asia/Singapore'].map((z) => ({ label: z.replace('_', ' '), value: z }));
const DIGEST = [{ label: 'Daily', value: 'daily' }, { label: 'Weekly', value: 'weekly' }, { label: 'Never', value: 'never' }];

/** The workspace form: general details, notifications, then the danger zone. */
export function WorkspaceForm() {
  const { showFlag } = useFlags();
  return (
    <div className="scr-settings">
      <Stack space="space.400">
        <Form onSubmit={() => void showFlag({ title: 'Settings saved', appearance: 'success', isAutoDismiss: true })}>
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <FormHeader title="Workspace details" description="Required fields are marked with an asterisk." />
              <FormSection title="General">
                <Field name="name" label="Workspace name" isRequired defaultValue="Launch Hub" validate={(v) => (v && v.length < 3 ? 'Use at least 3 characters.' : undefined)}>
                  {({ fieldProps, error }) => (
                    <>
                      <TextField {...fieldProps} />
                      {error ? <ErrorMessage>{error}</ErrorMessage> : <HelperMessage>Shown in the header and in emails.</HelperMessage>}
                    </>
                  )}
                </Field>
                <Field name="description" label="Description" defaultValue="">
                  {({ fieldProps }) => <TextArea {...fieldProps} minimumRows={3} />}
                </Field>
                <Field<SelectValue> name="zone" label="Time zone" defaultValue={ZONES[1]}>
                  {({ fieldProps }) => <Select {...fieldProps} options={ZONES} />}
                </Field>
              </FormSection>
              <FormSection title="Notifications">
                <Stack space="space.150">
                  <Toggle label="Email me about mentions" defaultChecked />
                  <CheckboxField name="assigned" defaultValue={true}>
                    {({ fieldProps }) => <Checkbox {...fieldProps} label="Work assigned to me" />}
                  </CheckboxField>
                  <CheckboxField name="comments" defaultValue={false}>
                    {({ fieldProps }) => <Checkbox {...fieldProps} label="Comments on work I watch" />}
                  </CheckboxField>
                  <Text weight="semibold" id="digest-label">Summary email</Text>
                  <RadioGroup aria-labelledby="digest-label" name="digest" options={DIGEST} defaultValue="weekly" />
                </Stack>
              </FormSection>
              <FormFooter>
                <Button appearance="subtle">Cancel</Button>
                <Button type="submit" appearance="primary" isLoading={submitting}>Save changes</Button>
              </FormFooter>
            </form>
          )}
        </Form>
        <section className="scr-danger" aria-labelledby="danger-title">
          <Stack space="space.150">
            <Heading size="medium" as="h2" id="danger-title">Danger zone</Heading>
            <SectionMessage appearance="warning" title="Deleting a workspace is permanent">
              <Text>Export anything you want to keep first. People lose access straight away.</Text>
            </SectionMessage>
            <div>
              <DeleteWorkspace name="Launch Hub" />
            </div>
          </Stack>
        </section>
      </Stack>
    </div>
  );
}
