// SPDX-License-Identifier: Apache-2.0
import { SectionMessage, SectionMessageAction } from '@interlink/react/section-message';

/** Title: With actions */
export default function Example() {
  return (
    <SectionMessage title="Storage almost full" appearance="warning" actions={<><SectionMessageAction href="#plans">Upgrade</SectionMessageAction><SectionMessageAction href="#files">Manage files</SectionMessageAction></>}>
      You have used 9 GB of your 10 GB.
    </SectionMessage>
  );
}
