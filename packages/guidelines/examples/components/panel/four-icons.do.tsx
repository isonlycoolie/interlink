// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronUpIcon from '@interlink/icons/core/chevron-up';
import ExternalIcon from '@interlink/icons/core/link-external';
import LinkIcon from '@interlink/icons/core/link';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import { AppShape } from '../../../src/kit';
import { IconButton } from '@interlink/react/button';
import { Panel } from '@interlink/react/navigation-system';
import { Stack } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Stack space="space.150">
      <AppShape height="auto">
        <Panel title="PAY-112" actions={<><IconButton appearance="subtle" icon={ChevronUpIcon} label="Previous" /><IconButton appearance="subtle" icon={ChevronDownIcon} label="Next" /><IconButton appearance="subtle" icon={MoreIcon} label="More actions" /></>} onClose={() => {}}>
          {null}
        </Panel>
      </AppShape>
      <AppShape height="auto">
        <Panel title="Launch plan" actions={<><IconButton appearance="subtle" icon={LinkIcon} label="Copy link" /><IconButton appearance="subtle" icon={ExternalIcon} label="Open in new tab" /></>} onClose={() => {}}>
          {null}
        </Panel>
      </AppShape>
    </Stack>
  );
}
