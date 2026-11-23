// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Button } from '@interlink/react/button';
import { TourNote } from '@interlink/react/tour-note';

/** Title: First-use tour */
export default function Example() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, minHeight: 300 }}>
      <Button appearance="subtle" onClick={() => setOpen((o) => !o)}>{isOpen ? 'Hide tips' : 'Show tips'}</Button>
      <div style={{ display: 'flex', gap: 8 }}>
        <TourNote placement="bottom" tone="ink" isOpen={isOpen} content="Invite your team so work has an owner.">
          <Button appearance="primary">Invite people</Button>
        </TourNote>
        <Button>Import data</Button>
      </div>
    </div>
  );
}
