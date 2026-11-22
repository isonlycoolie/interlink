// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';

/** Title: With icons */
export default function Example() {
  return (
    <Inline space="space.100">
      <Button iconBefore={AddIcon}>Create</Button>
      <Button iconAfter={ChevronDownIcon}>More</Button>
    </Inline>
  );
}
