// SPDX-License-Identifier: Apache-2.0
import FolderOpenIcon from '@interlink/icons/core/folder-open';
import { EmptyState } from '@interlink/react/empty-state';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="24rem">
      <EmptyState header="Create or import a repository" description="Start by creating a repository or importing one." renderImage={() => <FolderOpenIcon label="" shouldScale={false} spacing="spacious" color="color.icon.brand" />} width="narrow" headingLevel={3} />
    </Card>
  );
}
