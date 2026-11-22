// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { Range } from '@interlink/react/range';

/** Title: Default */
export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Stack space="space.050">
        <Label htmlFor="volume">Volume</Label>
        <Range id="volume" defaultValue={40} />
      </Stack>
    </div>
  );
}
