// @interlink-dont select.label-not-placeholder
// SPDX-License-Identifier: Apache-2.0
import { Select } from '@interlink/react/select';

export default function Example() {
  return (
    <div style={{ width: '18rem' }}>
      <Select aria-label="Work items" placeholder="Search work items" isClearable options={[{ label: 'Design review', value: 'design-review' }, { label: 'Release notes', value: 'release-notes' }, { label: 'Onboarding', value: 'onboarding' }]} />
    </div>
  );
}
