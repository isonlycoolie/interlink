// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { SectionMessage } from '@interlink/react/section-message';

/** Title: Appearances */
export default function Example() {
  return (
    <Stack space="space.200">
      <SectionMessage appearance="information" title="Plan renewal">Your plan renews on 1 March.</SectionMessage>
      <SectionMessage appearance="warning" title="Unsaved changes">Some fields changed since you last saved.</SectionMessage>
      <SectionMessage appearance="error" title="Could not save">Check your connection and try again.</SectionMessage>
      <SectionMessage appearance="success" title="Report ready">Your export is ready to download.</SectionMessage>
      <SectionMessage appearance="discovery" title="New board view">Group work by status in one place.</SectionMessage>
    </Stack>
  );
}
