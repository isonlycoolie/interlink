// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowDownIcon from '@interlink/icons/core/arrow-down';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ColumnsIcon from '@interlink/icons/core/layout-three-columns';
import GoalIcon from '@interlink/icons/core/goal';
import HierarchyIcon from '@interlink/icons/core/tree';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import PeopleIcon from '@interlink/icons/core/people-group';
import PersonIcon from '@interlink/icons/core/person';
import StatusIcon from '@interlink/icons/core/status-information';
import SearchIcon from '@interlink/icons/core/search';
import TagIcon from '@interlink/icons/core/tag';
import { Button, IconButton } from '@interlink/react/button';
import { Link } from '@interlink/react/link';
import { SegmentedControl } from '@interlink/react/segmented-control';
import { TextField } from '@interlink/react/textfield';
import { AppFrame } from '../shared/frame';
import { TourNote } from '../shared/tour-note';
import { GOALS } from './data';
import { GoalsNav } from './side-nav';
import { GoalTable } from './table';

const FILTERS = [
  { label: 'Filter by tag', icon: TagIcon },
  { label: 'Status', icon: StatusIcon },
  { label: 'Owner', icon: PersonIcon },
  { label: 'Team', icon: PeopleIcon },
  { label: 'Reporting line', icon: HierarchyIcon },
];

/** The goal directory: what goals are for, the views, search and filters, then every goal with its status. */
export default function GoalsScreen() {
  return (
    <AppFrame app={{ name: 'Goals', icon: GoalIcon, color: 'ink' }} sideNav={<GoalsNav />}>
      <div className="scr-page scr-goals">
        <div className="scr-spotlight">
          <span className="scr-spotlight-icon"><GoalIcon label="" color="currentColor" /></span>
          <p>Goals give teams one place to track progress toward the outcomes their work supports.</p>
          <Button appearance="primary">Create your first goal</Button>
          <Link href="#about-goals">More about goals</Link>
        </div>
        <div className="scr-title-row">
          <h1 className="scr-title">Goals</h1>
          <SegmentedControl shape="outline" label="Goal views" options={[{ value: 'all', label: 'All goals' }, { value: 'mine', label: 'My goals' }, { value: 'archived', label: 'Archived' }]} />
          <Button appearance="subtle" iconAfter={ChevronDownIcon}>More views</Button>
        </div>
        <TextField aria-label="Search goals" placeholder="Search goals" elemBeforeInput={<span className="scr-field-icon"><SearchIcon label="" color="color.icon.subtle" size="small" /></span>} />
        <div className="scr-filters">
          {FILTERS.map((f) => (
            <Button key={f.label} iconBefore={f.icon}>{f.label}</Button>
          ))}
          <IconButton icon={MoreIcon} label="More filters" />
          <TourNote tone="blue" arrow="left" style={{ left: '31rem', top: 'calc(-1 * var(--il-space-100))' }}>Make filtered views to stay on top of the goals that matter to you</TourNote>
        </div>
        <div className="scr-count-row">
          <h2 className="scr-h2">{GOALS.length} goals</h2>
          <div className="scr-row">
            <Button iconAfter={ArrowDownIcon}>Sort by following</Button>
            <Button iconBefore={ColumnsIcon}>Columns</Button>
            <IconButton icon={MoreIcon} label="More list actions" />
          </div>
        </div>
        <div className="scr-table-wrap">
          <GoalTable />
          <TourNote tone="red" arrow="up-right" style={{ left: '16rem', top: 'calc(100% + var(--il-space-300))' }}>See the status of team and company goals at a glance</TourNote>
        </div>
      </div>
    </AppFrame>
  );
}
