// SPDX-License-Identifier: Apache-2.0
import CreateProject from '@interlink/illustrations/art/create-project';
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';

/** The other views of the board are not part of this screen; each says so with an empty state. */
export function ViewPlaceholder({ name }: { name: string }) {
  return (
    <EmptyState
      header={`${name} is not part of this example`}
      description="This screen shows the board view. The same frame, header and toolbar hold every other view."
      renderImage={() => <CreateProject size="medium" />}
      primaryAction={<Button>Open the board</Button>}
      headingLevel={2}
    />
  );
}
