// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import GoalIcon from '@interlink/icons/core/goal';
import PeopleGroupIcon from '@interlink/icons/core/people-group';
import { AlignGuide, Crop } from '../../../src/kit';

/** Icons hang outside the text edge, so headings and lists share one line. */
export default function Example() {
  return (
    <Crop>
      <div style={{ paddingInlineStart: 'var(--il-space-500)', paddingBlock: 'var(--il-space-200)' }}>
        <Stack space="space.200">
          <Inline space="space.100" alignBlock="center">
            <span style={{ marginInlineStart: 'calc(-1 * (var(--il-space-200) + var(--il-space-100)))' }}>
              <GoalIcon label="" color="color.icon.brand" />
            </span>
            <Heading size="medium">Goals</Heading>
          </Inline>
          <Text as="p">Grow weekly active teams by a fifth this quarter.</Text>
          <Inline space="space.100" alignBlock="center">
            <span style={{ marginInlineStart: 'calc(-1 * (var(--il-space-200) + var(--il-space-100)))' }}>
              <PeopleGroupIcon label="" color="color.icon.brand" />
            </span>
            <Heading size="medium">Teams</Heading>
          </Inline>
          <Text as="p">Platform, Growth and Support own one goal each.</Text>
        </Stack>
      </div>
      <AlignGuide verdict="good" offset="var(--il-space-500)" />
    </Crop>
  );
}
