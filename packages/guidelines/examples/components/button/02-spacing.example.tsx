// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';

/** Title: Spacing */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Button appearance="primary">Default</Button>
      <Button appearance="primary" spacing="compact">Compact</Button>
    </Inline>
  );
}
