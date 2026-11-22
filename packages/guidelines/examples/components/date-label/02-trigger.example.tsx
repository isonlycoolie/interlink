// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { DateLabelDropdownTrigger } from '@interlink/react/date-label';

/** Title: Dropdown trigger */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <DateLabelDropdownTrigger label="29 Jul 2026" aria-label="Change due date, 29 Jul 2026" />
      <DateLabelDropdownTrigger label="Yesterday" appearance="danger" aria-label="Change due date, yesterday" />
    </Inline>
  );
}
