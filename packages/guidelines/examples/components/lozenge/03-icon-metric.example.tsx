// SPDX-License-Identifier: Apache-2.0
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import { Inline } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

/** Title: Icon and metric */
export default function Example() {
  return (
    <Inline space="space.100">
      <Lozenge appearance="success" iconBefore={StatusSuccessIcon}>Done</Lozenge>
      <Lozenge appearance="warning" trailingMetric="0.4">At risk</Lozenge>
    </Inline>
  );
}
