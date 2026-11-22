// SPDX-License-Identifier: Apache-2.0
import NoProjects from '@interlink/illustrations/art/no-projects';
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';

/** Title: With an illustration */
export default function Example() {
  return (
    <EmptyState
      header="No projects yet"
      description="Projects keep your team's work in one place. Create one to get started."
      renderImage={() => <NoProjects size="medium" />}
      primaryAction={<Button appearance="primary">Create project</Button>}
      secondaryAction={<Button>Import</Button>}
      headingLevel={3}
    />
  );
}
