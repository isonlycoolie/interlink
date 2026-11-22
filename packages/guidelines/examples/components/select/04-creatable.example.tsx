// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { CreatableSelect } from '@interlink/react/select';

/** Title: Create new options */
export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Stack space="space.050">
        <Label htmlFor="labels">Labels</Label>
        <CreatableSelect inputId="labels" isMulti options={[{ label: 'design', value: 'design' }, { label: 'backend', value: 'backend' }, { label: 'docs', value: 'docs' }, { label: 'release', value: 'release' }]} />
      </Stack>
    </div>
  );
}
