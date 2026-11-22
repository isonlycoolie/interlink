// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { Select } from '@interlink/react/select';

/** Title: Multi select */
export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Stack space="space.050">
        <Label htmlFor="cities">Cities</Label>
        <Select inputId="cities" isMulti isClearable options={[{ label: 'Adelaide', value: 'adelaide' }, { label: 'Brisbane', value: 'brisbane' }, { label: 'Canberra', value: 'canberra' }, { label: 'Darwin', value: 'darwin' }, { label: 'Hobart', value: 'hobart' }]} />
      </Stack>
    </div>
  );
}
