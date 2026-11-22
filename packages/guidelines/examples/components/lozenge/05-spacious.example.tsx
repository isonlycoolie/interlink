// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';

/** Title: Spacious */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Button>Edit</Button>
      <Lozenge spacing="spacious" appearance="success">Published</Lozenge>
    </Inline>
  );
}
