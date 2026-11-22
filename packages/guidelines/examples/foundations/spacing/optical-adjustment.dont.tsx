// @interlink-dont spacing.optical-adjustment
// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import GoalIcon from '@interlink/icons/core/goal';
import PeopleGroupIcon from '@interlink/icons/core/people-group';
import { AlignGuide, Crop } from '../../../src/kit';

/** The icon pushes the heading in, so it no longer lines up with the content under it. */
export default function Example() {
  return (
    <Crop>
      <div style={{ paddingInlineStart: 'var(--il-space-500)', paddingBlock: 'var(--il-space-200)' }}>
        <Stack space="space.200">
          <Inline space="space.100" alignBlock="center">
            <span >
              <GoalIcon label="" color="color.icon.brand" />
            </span>
            <Heading size="medium">Goals</Heading>
          </Inline>
          <Text as="p">Grow weekly active teams by a fifth this quarter.</Text>
          <Inline space="space.100" alignBlock="center">
            <span >
              <PeopleGroupIcon label="" color="color.icon.brand" />
            </span>
            <Heading size="medium">Teams</Heading>
          </Inline>
          <Text as="p">Platform, Growth and Support own one goal each.</Text>
        </Stack>
      </div>
      <AlignGuide verdict="bad" offset="var(--il-space-500)" />
    </Crop>
  );
}
