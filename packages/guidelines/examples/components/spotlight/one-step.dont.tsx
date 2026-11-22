// @interlink-dont spotlight.one-step
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { SpotlightActions, SpotlightBody, SpotlightCard, SpotlightControls, SpotlightDismissControl, SpotlightFooter, SpotlightHeader, SpotlightHeadline, SpotlightMedia, SpotlightPrimaryAction, SpotlightSecondaryAction, SpotlightStepCount } from '@interlink/react/spotlight';
import { SpotlightShape, Skeleton } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.200">
      <SpotlightShape>
      <SpotlightCard>
        <SpotlightHeader>
          <SpotlightHeadline>Welcome to your project</SpotlightHeadline>
          <SpotlightControls>
            <SpotlightDismissControl />
          </SpotlightControls>
        </SpotlightHeader>
        <SpotlightBody>Let us show you how to create good tasks.</SpotlightBody>
        <SpotlightFooter>
          <SpotlightStepCount current={1} total={2} />
          <SpotlightActions>
            <SpotlightPrimaryAction appearance="outline">Next</SpotlightPrimaryAction>
          </SpotlightActions>
        </SpotlightFooter>
      </SpotlightCard>
    </SpotlightShape>
      <SpotlightShape>
      <SpotlightCard>
        <SpotlightHeader>
          <SpotlightHeadline>Learn about tasks</SpotlightHeadline>
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
        <SpotlightBody>This is where you create a task. First, explore how tasks work.</SpotlightBody>
        <SpotlightFooter>
          <SpotlightStepCount current={2} total={2} />
          <SpotlightActions>
            <SpotlightSecondaryAction>Back</SpotlightSecondaryAction>
            <SpotlightPrimaryAction appearance="outline">Explore tasks</SpotlightPrimaryAction>
          </SpotlightActions>
        </SpotlightFooter>
      </SpotlightCard>
    </SpotlightShape>
    </Stack>
  );
}
