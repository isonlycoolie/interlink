// SPDX-License-Identifier: Apache-2.0
import { Avatar } from '@interlink/react/avatar';
import { Lozenge } from '@interlink/react/lozenge';
import { people } from '../../src/people';

const GOALS = [
  { goal: 'Payouts to M-Pesa in under 10 seconds', owner: people.kwame, date: '12 Aug', status: ['On track', 'success'] },
  { goal: 'Checkout converts above 70%', owner: people.zawadi, date: '19 Aug', status: ['At risk', 'warning'] },
  { goal: 'Fees approved by finance', owner: people.neema, date: '22 Aug', status: ['Done', 'information'] },
  { goal: 'Twelve merchants live in beta', owner: people.tunde, date: '29 Aug', status: ['Not started', 'neutral'] },
] as const;

/** The goals table: goal in the row header, then owner, due date and status. */
export function Goals() {
  return (
    <section aria-labelledby="goals-title">
      <h2 id="goals-title" className="scr-section-title">
        Goals
      </h2>
      <table className="scr-doc-table">
        <thead>
          <tr>
            <th scope="col">Goal</th>
            <th scope="col">Owner</th>
            <th scope="col">Due</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {GOALS.map((g) => (
            <tr key={g.goal}>
              <th scope="row">{g.goal}</th>
              <td>
                <span className="scr-person">
                  <Avatar src={g.owner.photo} name={g.owner.name} size="xsmall" label="" />
                  {g.owner.name}
                </span>
              </td>
              <td>{g.date}</td>
              <td>
                <Lozenge appearance={g.status[1]}>{g.status[0]}</Lozenge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const MONTHS = ['Jun', 'Jul', 'Aug', 'Sep'];
const BARS = [
  { name: 'Payout service', from: 1, to: 6, color: 'blue' },
  { name: 'Checkout design', from: 2, to: 5, color: 'purple' },
  { name: 'Pricing and fees', from: 4, to: 7, color: 'lime' },
  { name: 'Merchant beta', from: 6, to: 9, color: 'saffron' },
];

/** A small timeline: workstreams as solid bars across half-month columns. */
export function Timeline() {
  return (
    <section aria-labelledby="timeline-title">
      <h2 id="timeline-title" className="scr-section-title">
        Timeline
      </h2>
      <div className="scr-timeline">
        <span />
        {MONTHS.map((m) => (
          <span key={m} className="scr-timeline-month" aria-hidden="true">
            {m}
          </span>
        ))}
        {BARS.map((b) => (
          <div key={b.name} className="scr-timeline-row">
            <span className="scr-timeline-name">{b.name}</span>
            <span className="scr-timeline-bar" data-color={b.color} style={{ gridColumn: `${b.from + 1} / ${b.to + 1}` }}>
              <span className="il-visually-hidden">
                {MONTHS[Math.floor((b.from - 1) / 2)]} to {MONTHS[Math.floor((b.to - 2) / 2)]}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
