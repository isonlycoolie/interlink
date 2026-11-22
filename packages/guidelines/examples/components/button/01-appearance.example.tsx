// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';

/** Title: Appearance */
export default function Example() {
  return (
    <Inline space="space.100" shouldWrap>
      <Button>Default</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="subtle">Subtle</Button>
      <Button appearance="warning">Warning</Button>
      <Button appearance="danger">Danger</Button>
      <Button appearance="discovery">Discovery</Button>
    </Inline>
  );
}
