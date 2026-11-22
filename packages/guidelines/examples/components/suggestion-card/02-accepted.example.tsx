// SPDX-License-Identifier: Apache-2.0
import { SuggestionCard } from '@interlink/react/suggestion-card';
import { useState } from 'react';

/** Title: After accepting */
export default function Example() {
  const [done, setDone] = useState(false);
  return (
    <div style={{ maxWidth: '26rem' }}>
      <SuggestionCard
        title="Invite Kwame to the launch space"
        reason="He owns three of the open work items."
        onAccept={() => setDone(true)}
        acceptLabel="Invite"
        acceptedText={done ? 'Kwame was invited' : undefined}
      />
    </div>
  );
}
