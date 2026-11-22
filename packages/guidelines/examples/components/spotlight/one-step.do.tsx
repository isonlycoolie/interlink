// SPDX-License-Identifier: Apache-2.0
import { SpotlightActions, SpotlightBody, SpotlightCard, SpotlightControls, SpotlightDismissControl, SpotlightFooter, SpotlightHeader, SpotlightHeadline, SpotlightMedia, SpotlightPrimaryAction } from '@interlink/react/spotlight';
import { SpotlightShape, Skeleton } from '../../../src/kit';

export default function Example() {
  return (
    <SpotlightShape>
      <SpotlightCard>
        <SpotlightHeader>
          <SpotlightHeadline>Tasks keep work organized</SpotlightHeadline>
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
        <SpotlightBody>Create tasks with the right details to track every moving piece.</SpotlightBody>
        <SpotlightFooter>
          <SpotlightActions>
            <SpotlightPrimaryAction appearance="outline">See how</SpotlightPrimaryAction>
          </SpotlightActions>
        </SpotlightFooter>
      </SpotlightCard>
    </SpotlightShape>
  );
}
