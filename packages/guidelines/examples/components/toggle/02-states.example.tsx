// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Toggle } from '@interlink/react/toggle';

/** Title: States */
export default function Example() {
  return (
    <Inline space="space.300" alignBlock="center">
      <Toggle label="Disabled" isDisabled />
      <Toggle label="Saving" isLoading defaultChecked />
    </Inline>
  );
}
