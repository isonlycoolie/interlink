// SPDX-License-Identifier: Apache-2.0
'use client';
import { ActionPlan, type ActionStep } from '@interlink/react/action-plan';
import { Button } from '@interlink/react/button';
import { Link } from '@interlink/react/link';
import { SuggestionCard } from '@interlink/react/suggestion-card';
import { useState } from 'react';

const STEPS: ActionStep[] = [
  { id: 'read', title: 'Read the sprint board', detail: '14 work items, 4 still open', status: 'done' },
  { id: 'move', title: 'Move unfinished work to sprint 15', detail: 'PAY-121, PAY-124, PAY-127 and PAY-130, keeping their owners', status: 'current' },
  { id: 'notes', title: 'Write the sprint summary', status: 'upcoming' },
  { id: 'share', title: 'Share it in the Launch Hub space', status: 'upcoming' },
];

/** What the assistant answers: a plan it is running, then one change it wants approved. */
export function SprintAnswer() {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="scr-answer">
      <p>
        Sprint 14 closes on Friday. Ten of fourteen items are done. Here is the plan I am running; I will not touch anything
        outside the <Link href="#payments">Payments</Link> space.
      </p>
      <div className="scr-card-box">
        <ActionPlan title="Close payments sprint 14" steps={STEPS} actions={<Button appearance="subtle">Stop</Button>} />
      </div>
      <SuggestionCard
        title="Move PAY-110 to Done"
        reason="The webhook fix merged this morning and the retry tests pass in staging."
        context={<Link href="#pay-110">PAY-110</Link>}
        secondaryLabel="Check first"
        onAccept={() => setAccepted(true)}
        acceptedText={accepted ? 'PAY-110 moved to Done' : undefined}
      />
    </div>
  );
}

/** A short answer for any other prompt. */
export function GenericAnswer({ prompt }: { prompt: string }) {
  return (
    <div className="scr-answer">
      <p>
        I looked through the Payments and Launch Hub spaces for “{prompt}”. The beta page and last week’s sync notes cover
        most of it. Do you want a summary of both, or a plan with owners?
      </p>
    </div>
  );
}
