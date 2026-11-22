// SPDX-License-Identifier: Apache-2.0
'use client';
import NoTransactions from '@interlink/illustrations/art/no-transactions';
import { Avatar } from '@interlink/react/avatar';
import { Button } from '@interlink/react/button';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { EmptyState } from '@interlink/react/empty-state';
import { Lozenge } from '@interlink/react/lozenge';
import { Pagination } from '@interlink/react/pagination';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { PAYOUTS } from './data';

const STATUS = { Paid: 'success', Processing: 'information', Scheduled: 'neutral' } as const;
const HEAD = {
  cells: [
    { key: 'to', content: 'Recipient', isSortable: true, width: 32 },
    { key: 'method', content: 'Method', isSortable: true },
    { key: 'amount', content: 'Amount' },
    { key: 'status', content: 'Status', isSortable: true },
    { key: 'date', content: 'Date' },
  ],
};
const rows = PAYOUTS.map((p) => ({
  key: p.id,
  cells: [
    { key: p.to.name, content: (
      <span className="scr-person">
        <Avatar src={p.to.photo} name={p.to.name} size="small" label="" />
        <span className="scr-person-text">
          <span className="scr-person-name">{p.business}</span>
          <span className="scr-muted">{p.to.name} · {p.id}</span>
        </span>
      </span>
    ) },
    { key: p.method, content: p.method },
    { content: <span className="scr-amount">{p.amount}</span> },
    { key: p.status, content: <Lozenge appearance={STATUS[p.status]}>{p.status}</Lozenge> },
    { content: <span className="scr-nowrap">{p.date}</span> },
  ],
}));

/** Recent payouts, with a Failed view that is empty this month. Pagination sits in the table's own footer. */
export function Payouts() {
  return (
    <section className="scr-table-card" aria-labelledby="payouts-title">
      <Tabs id="payout-views">
        <div className="scr-table-card-head">
          <h2 id="payouts-title">Payouts</h2>
          <TabList aria-label="Payout views">
            <Tab>All</Tab>
            <Tab>Failed</Tab>
          </TabList>
        </div>
        <TabPanel>
          <DynamicTable head={HEAD} rows={rows} label="Recent payouts" defaultSortKey="date" />
          <div className="scr-table-foot">
            <p className="scr-muted">Showing 1–8 of 248</p>
            <Pagination pages={Array.from({ length: 31 }, (_, i) => i + 1)} max={7} label="Payout pages" />
          </div>
        </TabPanel>
        <TabPanel>
          <EmptyState
            header="No failed payouts in 30 days"
            description="When a payout fails, it shows here with the reason and a way to retry it."
            renderImage={() => <NoTransactions size="medium" />}
            primaryAction={<Button>Set up failure alerts</Button>}
            headingLevel={3}
          />
        </TabPanel>
      </Tabs>
    </section>
  );
}
