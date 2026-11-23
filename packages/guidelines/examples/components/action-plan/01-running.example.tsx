// SPDX-License-Identifier: Apache-2.0
import { ActionPlan } from '@interlink/react/action-plan';
import { Button } from '@interlink/react/button';

/** Title: Running plan */
export default function Example() {
  return (
    <div>
      <ActionPlan
        title="Plan to close the sprint"
        steps={[
          { id: 'read', title: 'Read the sprint board', detail: '42 work items, 6 still open', status: 'done' },
          { id: 'move', title: 'Move unfinished work to the next sprint', detail: '6 items, keeping their owners', status: 'current' },
          { id: 'notes', title: 'Write the sprint summary', status: 'upcoming' },
          { id: 'share', title: 'Share it in #payments', status: 'upcoming' },
        ]}
        actions={<Button appearance="subtle">Stop</Button>}
      />
    </div>
  );
}
