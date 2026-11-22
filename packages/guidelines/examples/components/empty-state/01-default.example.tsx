// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';

/** Title: Default */
export default function Example() {
  return (
    <EmptyState header="No projects yet" description="Projects keep your team's work in one place. Create one to get started." primaryAction={<Button appearance="primary">Create project</Button>} secondaryAction={<Button>Import</Button>} headingLevel={3} />
  );
}
