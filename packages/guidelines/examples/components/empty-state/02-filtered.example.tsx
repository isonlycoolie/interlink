// SPDX-License-Identifier: Apache-2.0
import EmptySearch from '@interlink/illustrations/art/empty-search';
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';

/** Title: No results for a search */
export default function Example() {
  return (
    <EmptyState
      width="narrow"
      header="No results for “invoice 2031”"
      description="Check the spelling, or search across all spaces."
      renderImage={() => <EmptySearch size="small" />}
      primaryAction={<Button>Search all spaces</Button>}
      headingLevel={3}
    />
  );
}
