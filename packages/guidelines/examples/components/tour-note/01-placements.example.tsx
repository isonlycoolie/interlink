// SPDX-License-Identifier: Apache-2.0
import FilterIcon from '@interlink/icons/core/filter';
import ShareIcon from '@interlink/icons/core/share';
import { Button } from '@interlink/react/button';
import { TourNote } from '@interlink/react/tour-note';

const row = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } as const;

/** Title: Placements */
export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: '100%' }}>
      <div style={row}>
        <TourNote placement="right" content="Save a filter as a view.">
          <Button iconBefore={FilterIcon}>Filter</Button>
        </TourNote>
        <TourNote placement="left" tone="purple" content="Start from a template.">
          <Button appearance="primary">Create</Button>
        </TourNote>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18rem', padding: '10rem 0' }}>
        <TourNote placement="bottom" tone="saffron" content="Your drafts live here.">
          <Button>Drafts</Button>
        </TourNote>
        <TourNote placement="top" tone="ink" content="Share with one link.">
          <Button iconBefore={ShareIcon}>Share</Button>
        </TourNote>
      </div>
    </div>
  );
}
