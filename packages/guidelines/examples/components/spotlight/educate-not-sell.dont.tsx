// @interlink-dont spotlight.educate-not-sell
// SPDX-License-Identifier: Apache-2.0
import { SpotlightActions, SpotlightBody, SpotlightCard, SpotlightControls, SpotlightDismissControl, SpotlightFooter, SpotlightHeader, SpotlightHeadline, SpotlightMedia, SpotlightPrimaryAction } from '@interlink/react/spotlight';
import { SpotlightShape, Skeleton } from '../../../src/kit';

export default function Example() {
  return (
    <SpotlightShape>
      <SpotlightCard>
        <SpotlightHeader>
          <SpotlightHeadline>Upgrade to get the assistant</SpotlightHeadline>
          <SpotlightControls>
            <SpotlightDismissControl />
          </SpotlightControls>
        </SpotlightHeader>
        <SpotlightMedia>
          <div className="ilk-spotlight-media" aria-hidden="true">
            <Skeleton width="70%" tone="strong" />
            <Skeleton width="50%" />
            <Skeleton width="60%" />
          </div>
        </SpotlightMedia>
        <SpotlightBody>Move to a paid plan to unlock helpful AI.</SpotlightBody>
        <SpotlightFooter>
          <SpotlightActions>
            <SpotlightPrimaryAction appearance="primary">Contact sales</SpotlightPrimaryAction>
          </SpotlightActions>
        </SpotlightFooter>
      </SpotlightCard>
    </SpotlightShape>
  );
}
