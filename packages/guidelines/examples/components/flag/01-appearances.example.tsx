// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Flag } from '@interlink/react/flag';

/** Title: Appearances */
export default function Example() {
  return (
    <Stack space="space.200">
      <Flag id="saved" title="Page saved" description="Your changes are visible to everyone in the space." actions={[{ content: 'View page' }]} />
      <Flag id="info" appearance="info" title="Connecting to the server" />
      <Flag id="done" appearance="success" title="Project created" description="Invite your team to get started." actions={[{ content: 'Invite' }]} />
      <Flag id="warn" appearance="warning" title="You are running low on storage" />
      <Flag id="error" appearance="error" title="We could not save your changes" description="Check your connection and try again." />
    </Stack>
  );
}
