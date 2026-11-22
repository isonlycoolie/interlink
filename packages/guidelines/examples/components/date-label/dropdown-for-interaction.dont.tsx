// @interlink-dont date-label.dropdown-for-interaction
// SPDX-License-Identifier: Apache-2.0
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { Inline } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';
import { DateLabel } from '@interlink/react/date-label';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <DateLabel label="29 Jul 2026" appearance="warning" />
      <IconButton icon={ChevronRightIcon} label="Next date" spacing="compact" appearance="subtle" />
    </Inline>
  );
}
