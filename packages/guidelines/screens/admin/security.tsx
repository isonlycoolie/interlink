// SPDX-License-Identifier: Apache-2.0
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import ArrowUpIcon from '@interlink/icons/core/arrow-up';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Button } from '@interlink/react/button';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

/** What chat security blocked: the top category, the agent with the most detections, and prompts enforced. */
export function Security() {
  return (
    <>
      <h1 className="scr-title">Chat security</h1>
      <Tabs id="security-tabs">
        <TabList aria-label="Security views">
          <Tab>Security analytics</Tab>
          <Tab>Detections from Guard</Tab>
          <Tab>Custom detections</Tab>
        </TabList>
        <TabPanel>
          <div className="scr-security">
            <div className="scr-row scr-security-filters">
              <Button iconAfter={ChevronDownIcon}>Last 90 days</Button>
              <Button iconAfter={ChevronDownIcon}>Enforcement: Blocked</Button>
            </div>
            <div className="scr-security-grid">
              <section className="scr-metric" aria-labelledby="m-category">
                <h2 id="m-category">Top detection category</h2>
                <p className="scr-metric-value">Financial <span className="scr-up"><ArrowUpIcon label="Up" color="currentColor" size="small" />24%</span></p>
                <p className="scr-muted-body">Top category blocked in chat, across all agents.</p>
              </section>
              <section className="scr-metric scr-metric-ring" aria-labelledby="m-enforced">
                <h2 id="m-enforced">Prompts enforced</h2>
                <p className="scr-muted-body">Sensitive company data sent to agents</p>
                <svg viewBox="0 0 120 120" role="img" aria-label="1,793 prompts enforced, all blocked">
                  <circle cx="60" cy="60" r="50" className="scr-ring-track" />
                  <circle cx="60" cy="60" r="50" className="scr-ring-blocked" />
                  <text x="60" y="58" className="scr-ring-n">1,793</text>
                  <text x="60" y="76" className="scr-ring-l">enforced</text>
                </svg>
                <p className="scr-legend-item"><span aria-hidden="true" />Blocked</p>
              </section>
              <section className="scr-metric" aria-labelledby="m-agent">
                <h2 id="m-agent">Top agent by detections</h2>
                <p className="scr-metric-value"><AgentAvatar name="Customer insights" icon={AiAgentIcon} color="blue" size="medium" label="" />Customer insights</p>
                <p className="scr-muted-body">The agent with the most detections in this period.</p>
              </section>
            </div>
          </div>
        </TabPanel>
        <TabPanel><p className="scr-muted-body scr-project-empty">Detections will appear here.</p></TabPanel>
        <TabPanel><p className="scr-muted-body scr-project-empty">Custom detections will appear here.</p></TabPanel>
      </Tabs>
    </>
  );
}
