// SPDX-License-Identifier: Apache-2.0
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusInformationIcon from '@interlink/icons/core/status-information';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { Inline } from '@interlink/react/primitives';

/** Title: Colors */
export default function Example() {
  return (
    <Inline space="space.200">
      <StatusSuccessIcon label="Success" color="color.icon.success" />
      <StatusWarningIcon label="Warning" color="color.icon.warning" />
      <StatusErrorIcon label="Error" color="color.icon.danger" />
      <StatusInformationIcon label="Information" color="color.icon.information" />
    </Inline>
  );
}
