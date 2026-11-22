// SPDX-License-Identifier: Apache-2.0
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Avatar } from '@interlink/react/avatar';
import { people } from '../../../src/people';

/** Title: Working for a person */
export default function Example() {
  return (
    <AgentAvatar
      name="Planner"
      icon={RoadmapIcon}
      color="purple"
      size="large"
      onBehalfOf={<Avatar src={people.amara.photo} name={people.amara.name} size="xsmall" />}
      label="Planner (agent), working for Amara Okafor"
    />
  );
}
