// @interlink-dont empty-state.scale-illustration
// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import { Box } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { EmptyState } from '@interlink/react/empty-state';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="14rem">
      <EmptyState header="No automations" primaryAction={<Button appearance="primary">Manage rules</Button>} renderImage={() => <Box backgroundColor="color.background.brand.subtlest" padding="space.1000"><AutomationIcon label="" color="color.icon.brand" /></Box>} width="narrow" headingLevel={3} />
    </Card>
  );
}
