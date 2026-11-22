// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import SearchIcon from '@interlink/icons/core/search';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Inline } from '@interlink/react/primitives';

/** Title: Colours and sizes */
export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="xlarge" />
      <AgentAvatar name="Runner" icon={AutomationIcon} color="blue" size="large" />
      <AgentAvatar name="Finder" icon={SearchIcon} color="saffron" />
      <AgentAvatar name="Guard" icon={ShieldIcon} color="lime" size="small" />
      <AgentAvatar name="Scribe" color="ink" size="xsmall" />
    </Inline>
  );
}
