// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import { Inline } from '@interlink/react/primitives';
import { PresenceCursor } from '@interlink/react/presence-cursor';

/** Title: Large, for marketing pictures */
export default function Example() {
  return (
    <Inline space="space.400">
      <PresenceCursor name="Zawadi" color="saffron" size="large" />
      <PresenceCursor name="Runner" color="agent" agentIcon={AutomationIcon} size="large" />
    </Inline>
  );
}
