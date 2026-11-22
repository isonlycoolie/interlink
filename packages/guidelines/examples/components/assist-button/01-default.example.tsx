// SPDX-License-Identifier: Apache-2.0
import { AssistButton } from '@interlink/react/assist-button';
import { Inline } from '@interlink/react/primitives';

/** Title: Appearances */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <AssistButton>Ask Interlink</AssistButton>
      <AssistButton appearance="subtle">Summarise</AssistButton>
      <AssistButton hasMenu aria-haspopup="menu" aria-expanded={false}>Improve writing</AssistButton>
      <AssistButton spacing="compact">Draft reply</AssistButton>
    </Inline>
  );
}
