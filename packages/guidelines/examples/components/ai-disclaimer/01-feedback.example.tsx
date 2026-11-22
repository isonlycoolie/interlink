// SPDX-License-Identifier: Apache-2.0
import { AIDisclaimer } from '@interlink/react/ai-disclaimer';

/** Title: With feedback */
export default function Example() {
  return (
    <div style={{ maxWidth: '28rem' }}>
      <AIDisclaimer onFeedback={() => {}} onComment={() => {}} />
    </div>
  );
}
