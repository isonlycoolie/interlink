// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { LinkButton } from '@interlink/react/button';

/** Title: Link button */
export default function Example() {
  return (
    <Inline space="space.100">
      <LinkButton href="#docs">Read the docs</LinkButton>
      <LinkButton href="#new" appearance="primary">New project</LinkButton>
    </Inline>
  );
}
