// SPDX-License-Identifier: Apache-2.0
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import RefreshIcon from '@interlink/icons/core/refresh';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { IconButton } from '@interlink/react/button';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { SegmentedControl } from '@interlink/react/segmented-control';

const LOG = [
  ['Oct 28, 2026', '15:32 EAT', 'Edited the Q3 launch plan page'],
  ['Sep 25, 2026', '09:04 EAT', 'Searched the support knowledge base'],
  ['Sep 17, 2026', '11:48 EAT', 'Created a page in Payments'],
  ['Sep 4, 2026', '16:20 EAT', 'Created a group in Product'],
] as const;

/** What agents did, when, from where, and for whom, filterable with a query. */
export function Activity() {
  return (
    <>
      <h1 className="scr-title">Activity log</h1>
      <p className="scr-lead">Every action taken by an agent, with the person it acted for.</p>
      <div className="scr-query-row">
        <SegmentedControl label="Query mode" options={[{ value: 'basic', label: 'Basic' }, { value: 'query', label: 'Query' }]} defaultValue="query" />
        <div className="scr-query" role="textbox" aria-label="Query" aria-readonly="true">
          <span data-k="field">created</span> <span data-k="op">&gt;=</span> -7d <span data-k="kw">AND</span> <span data-k="field">actor</span>=<span data-k="str">"Customer insights"</span>
        </div>
      </div>
      <p className="scr-results">Showing 1,890 results <IconButton appearance="subtle" spacing="compact" icon={RefreshIcon} label="Refresh results" /></p>
      <div className="scr-table-card">
        <DynamicTable
          label="Activity log"
          head={{ cells: [{ key: 'date', content: 'Date', width: 16 }, { key: 'location', content: 'Location', width: 16 }, { key: 'actor', content: 'Actor', width: 38 }, { key: 'activity', content: 'Activity', width: 30 }] }}
          rows={LOG.map(([d, t, a]) => ({
            key: d,
            cells: [
              { key: d, content: <span className="scr-two"><span>{d}</span><span className="scr-muted">{t}</span></span> },
              { content: <span className="scr-two"><span>Nairobi</span><span className="scr-muted">41.90.64.12</span></span> },
              { content: <span className="scr-person"><AgentAvatar name="Customer insights" icon={AiAgentIcon} color="blue" size="medium" label="" />Customer insights<span className="scr-delegated">Delegated by user</span></span> },
              { content: a },
            ],
          }))}
        />
      </div>
    </>
  );
}
