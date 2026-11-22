// @interlink-dont panel.name-after-task
// SPDX-License-Identifier: Apache-2.0
import { AppShape } from '../../../src/kit';
import { Checkbox } from '@interlink/react/checkbox';
import { Panel } from '@interlink/react/navigation-system';
import { Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';

export default function Example() {
  return (
    <AppShape height="20rem">
      <Panel title="Default field scheme" subtitle="Add fields" onClose={() => {}}>
        <Stack space="space.100">
          <TextField aria-label="Search fields" placeholder="Search fields" />
          <Checkbox label="Due date" defaultChecked />
          <Checkbox label="Story points" />
          <Checkbox label="Team" defaultChecked />
        </Stack>
      </Panel>
    </AppShape>
  );
}
