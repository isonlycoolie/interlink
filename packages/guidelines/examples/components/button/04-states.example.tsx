// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';

/** Title: Selected, loading and disabled */
export default function Example() {
  return (
    <Inline space="space.100">
      <Button isSelected>Selected</Button>
      <Button appearance="primary" isLoading>Saving</Button>
      <Button isDisabled>Disabled</Button>
    </Inline>
  );
}
