// @interlink-dont lozenge.icons-sparingly
// SPDX-License-Identifier: Apache-2.0
import CalendarIcon from '@interlink/icons/core/calendar';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Stack space="space.100">
      <Inline space="space.200"><Text size="small">Process review</Text><Lozenge iconBefore={StatusSuccessIcon} trailingMetric="0.8">Completed</Lozenge><Lozenge appearance="danger" iconBefore={StatusWarningIcon}>March</Lozenge></Inline>
      <Inline space="space.200"><Text size="small">Q4 features</Text><Lozenge iconBefore={StatusSuccessIcon} trailingMetric="0.8">Completed</Lozenge><Lozenge iconBefore={CalendarIcon}>June</Lozenge></Inline>
      <Inline space="space.200"><Text size="small">Growth target</Text><Lozenge appearance="warning" iconBefore={StatusWarningIcon} trailingMetric="0.5">At risk</Lozenge><Lozenge iconBefore={CalendarIcon}>January</Lozenge></Inline>
    </Stack>
  );
}
