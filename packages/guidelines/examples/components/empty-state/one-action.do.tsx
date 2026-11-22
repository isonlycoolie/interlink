// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="24rem">
      <EmptyState header="Ask your first question" description="Share what you know with your team. Ask a question to get started." primaryAction={<Button appearance="primary">Ask a question</Button>} width="narrow" headingLevel={3} />
    </Card>
  );
}
