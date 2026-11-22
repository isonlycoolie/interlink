// SPDX-License-Identifier: Apache-2.0
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { Inline } from '@interlink/react/primitives';
import { PresenceCursor } from '@interlink/react/presence-cursor';

/** Title: People and agents */
export default function Example() {
  return (
    <Inline space="space.400" shouldWrap>
      <PresenceCursor name="Amara" color="purple" />
      <PresenceCursor name="Kwame" color="blue" />
      <PresenceCursor name="Neema" color="lime" />
      <PresenceCursor name="Tunde" color="saffron" pointer="top-right" />
      <PresenceCursor name="Planner" color="agent" agentIcon={RoadmapIcon} />
    </Inline>
  );
}
