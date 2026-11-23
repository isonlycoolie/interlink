// SPDX-License-Identifier: Apache-2.0
'use client';
import { DropdownItem, DropdownItemGroup, DropdownMenu } from '@interlink/react/dropdown-menu';
import { Lozenge, type LozengeProps } from '@interlink/react/lozenge';
import { useState } from 'react';

type Appearance = NonNullable<LozengeProps['appearance']>;
const ACTIVE: [string, Appearance][] = [['Pending', 'neutral'], ['On track', 'success'], ['At risk', 'warning'], ['Off track', 'danger'], ['Completed', 'information']];
const CLOSED: [string, Appearance][] = [['Paused', 'neutral'], ['Cancelled', 'neutral']];

/** The project's status: a button that opens every status as its lozenge, active ones first. */
export function StatusMenu({ defaultStatus = 'On track' }: { defaultStatus?: string }) {
  const [status, setStatus] = useState(defaultStatus);
  const item = ([label, appearance]: [string, Appearance]) => (
    <DropdownItem key={label} isSelected={label === status} onClick={() => setStatus(label)}>
      <Lozenge appearance={appearance}>{label}</Lozenge>
    </DropdownItem>
  );
  return (
    <DropdownMenu trigger={status} label="Project status" placement="bottom-end">
      <DropdownItemGroup>{ACTIVE.map(item)}</DropdownItemGroup>
      <DropdownItemGroup hasSeparator>{CLOSED.map(item)}</DropdownItemGroup>
    </DropdownMenu>
  );
}
