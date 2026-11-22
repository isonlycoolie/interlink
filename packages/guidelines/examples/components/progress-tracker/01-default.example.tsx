// SPDX-License-Identifier: Apache-2.0
import { ProgressTracker } from '@interlink/react/progress-tracker';

/** Title: Default */
export default function Example() {
  return (
    <ProgressTracker
      items={[
        { id: 'details', label: 'Details', percentageComplete: 100, status: 'visited', href: '#details' },
        { id: 'team', label: 'Team', percentageComplete: 40, status: 'current' },
        { id: 'access', label: 'Access', percentageComplete: 0, status: 'unvisited' },
        { id: 'review', label: 'Review', percentageComplete: 0, status: 'unvisited' },
      ]}
    />
  );
}
