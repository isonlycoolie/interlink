// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentCard } from '@interlink/react/agent-card';

/** Title: Directory */
export default function Example() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', gap: 16 }}>
      <AgentCard name="Planner" createdBy="By Interlink" description="Turns a goal into a plan with tasks and owners." icon={RoadmapIcon} color="purple" onChat={() => {}} href="#planner" />
      <AgentCard name="Runner" createdBy="By Kwame Mensah" description="Runs routine updates across your projects." icon={AutomationIcon} color="blue" onChat={() => {}} href="#runner" />
      <AgentCard name="Guard" createdBy="By Sipho Ndlovu" description="Checks pages for secrets before they are shared." icon={ShieldIcon} color="lime" onChat={() => {}} href="#guard" />
    </div>
  );
}
