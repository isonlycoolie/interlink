// SPDX-License-Identifier: Apache-2.0
'use client';
import { Avatar } from '@interlink/react/avatar';
import { Badge } from '@interlink/react/badge';
import { Button } from '@interlink/react/button';
import { DatePicker } from '@interlink/react/datetime-picker';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { Label } from '@interlink/react/form';
import { Lozenge } from '@interlink/react/lozenge';
import { Heading, Inline, MetricText, Stack, Text } from '@interlink/react/primitives';
import { Select } from '@interlink/react/select';
import { BarChart, TrendChart } from './charts';
import { ACTIVE, METRICS, PROJECTS, RESPONSE, WEEKS } from './data';

const HEALTH = { 'On track': 'success', 'At risk': 'warning', 'Off track': 'danger' } as const;
const TEAMS = [{ label: 'All teams', value: 'all' }, { label: 'Product', value: 'product' }, { label: 'Support', value: 'support' }];

/** An admin overview: filters, metric tiles, two charts and a sortable table of projects. */
export default function AnalyticsScreen() {
  const rows = PROJECTS.map((p) => ({
    key: p.name,
    cells: [
      { key: p.name, content: <Text weight="medium">{p.name}</Text> },
      { key: p.lead, content: <Inline space="space.100" alignBlock="center"><Avatar name={p.lead} size="small" label="" /><Text>{p.lead}</Text></Inline> },
      { key: p.done, content: p.done },
      { key: p.open, content: p.open },
      { key: p.health, content: <Lozenge appearance={HEALTH[p.health]}>{p.health}</Lozenge> },
    ],
  }));
  return (
    <main className="scr-page">
      <Stack space="space.400">
        <Inline spread="space-between" alignBlock="end" shouldWrap rowSpace="space.200">
          <Stack space="space.050">
            <Heading size="large" as="h1">Analytics</Heading>
            <Text color="color.text.subtle">How your organization worked over the last 30 days.</Text>
          </Stack>
          <Inline space="space.150" alignBlock="end" shouldWrap>
            <div className="scr-filter"><Label htmlFor="from">From</Label><DatePicker id="from" defaultValue="2026-04-24" /></div>
            <div className="scr-filter"><Label htmlFor="to">To</Label><DatePicker id="to" defaultValue="2026-05-23" /></div>
            <div className="scr-filter"><Label htmlFor="team">Team</Label><Select inputId="team" options={TEAMS} defaultValue={TEAMS[0]} /></div>
            <Button>Export</Button>
          </Inline>
        </Inline>
        <div className="scr-metrics">
          {METRICS.map((m) => (
            <section key={m.label} className="scr-tile" aria-label={m.label}>
              <Text size="small" weight="semibold" color="color.text.subtle">{m.label}</Text>
              <Inline space="space.100" alignBlock="center">
                <MetricText size="large">{m.value}</MetricText>
                <Badge appearance={m.isUp === m.upIsGood ? 'added' : 'removed'}>{m.change}</Badge>
              </Inline>
              <Text size="small" color="color.text.subtlest">{m.note}</Text>
            </section>
          ))}
        </div>
        <div className="scr-chart-row">
          <section className="scr-tile" aria-labelledby="active-title">
            <Heading size="small" as="h2" id="active-title">Active people per week (thousands)</Heading>
            <BarChart labels={WEEKS} max={9} unit="k" series={[{ name: 'Product', color: 'var(--il-chart-categorical-1)', values: ACTIVE.product }, { name: 'Support', color: 'var(--il-chart-categorical-2)', values: ACTIVE.support }]} />
          </section>
          <section className="scr-tile" aria-labelledby="response-title">
            <Heading size="small" as="h2" id="response-title">Median response time (hours)</Heading>
            <TrendChart labels={WEEKS} values={RESPONSE} max={3} label="Median response time fell from 2.6 to 1.8 hours over eight weeks" />
          </section>
        </div>
        <section className="scr-tile" aria-labelledby="projects-title">
          <Heading size="small" as="h2" id="projects-title">Projects</Heading>
          <DynamicTable
            label="Projects"
            head={{ cells: [{ key: 'name', content: 'Project', isSortable: true, width: 30 }, { key: 'lead', content: 'Lead', isSortable: true }, { key: 'done', content: 'Done', isSortable: true }, { key: 'open', content: 'Open', isSortable: true }, { key: 'health', content: 'Health', isSortable: true }] }}
            rows={rows}
            rowsPerPage={5}
            defaultSortKey="done"
            defaultSortOrder="DESC"
          />
        </section>
      </Stack>
    </main>
  );
}
