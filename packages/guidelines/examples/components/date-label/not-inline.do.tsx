// SPDX-License-Identifier: Apache-2.0
import { Inline, Text } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';
import { DateLabel } from '@interlink/react/date-label';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem">
      <Inline space="space.100" alignBlock="center">
        <Lozenge appearance="success">On track</Lozenge>
        <Text color="color.text.subtle">for</Text>
        <DateLabel label="January" />
      </Inline>
    </Card>
  );
}
