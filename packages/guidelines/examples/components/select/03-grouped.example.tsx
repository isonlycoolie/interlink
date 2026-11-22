// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { Select } from '@interlink/react/select';

/** Title: Grouped options */
export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Stack space="space.050">
        <Label htmlFor="team">Team</Label>
        <Select
          inputId="team"
          options={[
            { label: 'Design', options: [{ label: 'Brand', value: 'brand' }, { label: 'Product design', value: 'product-design' }] },
            { label: 'Engineering', options: [{ label: 'Platform', value: 'platform' }, { label: 'Mobile', value: 'mobile' }] },
          ]}
        />
      </Stack>
    </div>
  );
}
