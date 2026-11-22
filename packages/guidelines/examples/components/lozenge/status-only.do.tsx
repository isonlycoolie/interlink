// SPDX-License-Identifier: Apache-2.0
import StatusInformationIcon from '@interlink/icons/core/status-information';
import { Inline } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Inline space="space.100" shouldWrap>
      <Lozenge appearance="information" iconBefore={StatusInformationIcon}>In progress</Lozenge>
      <Lozenge appearance="success">Active</Lozenge>
      <Lozenge appearance="discovery">Premium</Lozenge>
      <Lozenge appearance="warning">P2</Lozenge>
      <Lozenge appearance="danger">Urgent</Lozenge>
      <Lozenge>Paused</Lozenge>
    </Inline>
  );
}
