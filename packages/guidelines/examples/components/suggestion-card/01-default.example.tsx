// SPDX-License-Identifier: Apache-2.0
import { Link } from '@interlink/react/link';
import { SuggestionCard } from '@interlink/react/suggestion-card';
import { Tag } from '@interlink/react/tag';

/** Title: Recommendation */
export default function Example() {
  return (
    <div style={{ maxWidth: '26rem' }}>
      <SuggestionCard
        title="Move PAY-112 to In review"
        reason="Its pull request merged an hour ago and checks passed."
        context={<>
          <Link href="#pr">Pull request 482</Link>
          <Tag text="Payments" appearance="rounded" />
        </>}
        secondaryLabel="Edit first"
        onDismiss={() => {}}
      />
    </div>
  );
}
