// SPDX-License-Identifier: Apache-2.0
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { Stack } from '@interlink/react/primitives';
import { Banner } from '@interlink/react/banner';

/** Title: Appearances */
export default function Example() {
  return (
    <Stack space="space.100">
      <Banner appearance="warning" icon={<StatusWarningIcon label="Warning" color="color.icon.warning.inverse" />}>
        Your free trial ends in 3 days.
      </Banner>
      <Banner appearance="error" icon={<StatusErrorIcon label="Error" color="color.icon.inverse" />}>
        We are having trouble connecting. Some changes may not save.
      </Banner>
      <Banner appearance="announcement">Scheduled maintenance on Saturday from 02:00 to 04:00 UTC.</Banner>
    </Stack>
  );
}
