// @interlink-dont panel.four-icons
// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronUpIcon from '@interlink/icons/core/chevron-up';
import ExternalIcon from '@interlink/icons/core/link-external';
import FilterIcon from '@interlink/icons/core/filter';
import { AppShape } from '../../../src/kit';
import { IconButton } from '@interlink/react/button';
import { Panel } from '@interlink/react/navigation-system';

export default function Example() {
  return (
    <AppShape height="auto">
      <Panel
        title="Launch plan"
        actions={<><IconButton appearance="subtle" icon={ChevronUpIcon} label="Previous" /><IconButton appearance="subtle" icon={ChevronDownIcon} label="Next" /><IconButton appearance="subtle" icon={AddIcon} label="Add" /><IconButton appearance="subtle" icon={FilterIcon} label="Filter" /><IconButton appearance="subtle" icon={ExternalIcon} label="Open in new tab" /></>}
        onClose={() => {}}
      >
        {null}
      </Panel>
    </AppShape>
  );
}
