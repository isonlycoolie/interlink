// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

/** Title: Accent colors */
export default function Example() {
  return (
    <Inline space="space.100" shouldWrap>
      <Lozenge appearance="accent-red">Red</Lozenge>
      <Lozenge appearance="accent-orange">Orange</Lozenge>
      <Lozenge appearance="accent-lime">Lime</Lozenge>
      <Lozenge appearance="accent-teal">Teal</Lozenge>
      <Lozenge appearance="accent-blue">Blue</Lozenge>
      <Lozenge appearance="accent-purple">Purple</Lozenge>
      <Lozenge appearance="accent-magenta">Magenta</Lozenge>
    </Inline>
  );
}
