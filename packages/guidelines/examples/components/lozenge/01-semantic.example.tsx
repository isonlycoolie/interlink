// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

/** Title: Semantic colors */
export default function Example() {
  return (
    <Inline space="space.100" shouldWrap>
      <Lozenge>Neutral</Lozenge>
      <Lozenge appearance="success">Success</Lozenge>
      <Lozenge appearance="warning">Warning</Lozenge>
      <Lozenge appearance="danger">Danger</Lozenge>
      <Lozenge appearance="information">Information</Lozenge>
      <Lozenge appearance="discovery">Discovery</Lozenge>
    </Inline>
  );
}
