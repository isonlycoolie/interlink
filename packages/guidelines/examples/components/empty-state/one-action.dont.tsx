// @interlink-dont empty-state.one-action
// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Link } from '@interlink/react/link';
import { EmptyState } from '@interlink/react/empty-state';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="24rem">
      <Stack space="space.100">
        <Inline spread="space-between"><Heading size="small">Questions</Heading><Button appearance="primary" spacing="compact">New question</Button></Inline>
        <EmptyState header="Ask your first question" description="Share what you know with your team." primaryAction={<Button appearance="primary">Ask a question</Button>} secondaryAction={<Button>View examples</Button>} tertiaryAction={<Link href="#help">Learn more</Link>} width="narrow" headingLevel={3} />
      </Stack>
    </Card>
  );
}
