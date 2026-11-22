// SPDX-License-Identifier: Apache-2.0
import StarStarredIcon from '@interlink/icons/core/star-starred';
import BoardIcon from '@interlink/icons/core/board';
import DashboardIcon from '@interlink/icons/core/dashboard';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { Card, Connector, TokenTag } from '../../../src/kit';

function Row({ icon: Icon, title, meta, star }: { icon: ComponentType<IconProps>; title: string; meta: string; star: ReactNode }) {
  return (
    <Inline space="space.150" alignBlock="center" spread="space-between">
      <Inline space="space.150" alignBlock="center">
        <Icon label="" color="color.icon.accent.purple" spacing="spacious" />
        <Stack>
          <Text>{title}</Text>
          <Text size="small" color="color.text.subtlest">{meta}</Text>
        </Stack>
      </Inline>
      {star}
    </Inline>
  );
}

/** Small stars use orange, which stays bright and readable. */
export default function Example() {
  const star = <StarStarredIcon label="Starred" color="color.icon.accent.orange" />;
  return (
    <Stack alignInline="end">
      <TokenTag token="color.icon.accent.orange" />
      <span style={{ marginInlineEnd: 'var(--il-space-250)' }}>
        <Connector />
      </span>
      <Card width="20rem" padding="space.200">
        <Stack space="space.150">
          <Text size="small" weight="bold" color="color.text.subtle">Starred</Text>
          <Row icon={BoardIcon} title="Release planning" meta="Team board" star={star} />
          <Row icon={DashboardIcon} title="Usage insights" meta="Shared dashboard" star={star} />
        </Stack>
      </Card>
    </Stack>
  );
}
