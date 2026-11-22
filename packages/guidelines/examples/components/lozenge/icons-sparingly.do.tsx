// SPDX-License-Identifier: Apache-2.0
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import TaskInProgressIcon from '@interlink/icons/core/task-in-progress';
import { Stack } from '@interlink/react/primitives';
import { LozengeDropdownTrigger } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <LozengeDropdownTrigger>To do</LozengeDropdownTrigger>
      <LozengeDropdownTrigger appearance="information" iconBefore={TaskInProgressIcon}>In progress</LozengeDropdownTrigger>
      <LozengeDropdownTrigger appearance="success" iconBefore={StatusSuccessIcon}>Completed</LozengeDropdownTrigger>
    </Stack>
  );
}
