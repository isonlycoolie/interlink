// SPDX-License-Identifier: Apache-2.0
import { DynamicTable } from '@interlink/react/dynamic-table';

const PEOPLE = ['Nia Park', 'Kai Moto', 'Lena Ruiz', 'Omar Haddad', 'Sam Ito', 'Ada Byron'];
const HEAD = {
  cells: [
    { key: 'name', content: 'Name', isSortable: true, width: 40 },
    { key: 'lead', content: 'Lead', isSortable: true },
    { key: 'items', content: 'Open items', isSortable: true },
  ],
};
const ROWS = ['Website refresh', 'Billing', 'Mobile app', 'Design system', 'Onboarding', 'Data platform'].map((name, i) => ({
  key: name,
  cells: [
    { key: name, content: name },
    { key: PEOPLE[i], content: PEOPLE[i] },
    { key: (i * 7) % 20, content: String((i * 7) % 20) },
  ],
}));

/** Title: Sortable and paged */
export default function Example() {
  return (
    <DynamicTable
      caption="Projects"
      head={HEAD}
      rows={ROWS}
      rowsPerPage={4}
      defaultSortKey="name"
    />
  );
}
