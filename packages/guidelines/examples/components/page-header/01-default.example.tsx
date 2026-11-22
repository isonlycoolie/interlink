// SPDX-License-Identifier: Apache-2.0
import FilterIcon from '@interlink/icons/core/filter';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import { AvatarGroup } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button, IconButton } from '@interlink/react/button';
import { PageHeader } from '@interlink/react/page-header';
import { TextField } from '@interlink/react/textfield';
import { people } from '../../../src/people';

const team = [people.amara, people.kwame, people.neema, people.tunde].map((p) => ({ key: p.name, name: p.name, src: p.photo }));

/** Title: Breadcrumbs, actions and a bottom bar */
export default function Example() {
  return (
    <PageHeader
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbsItem text="Spaces" href="#spaces" />
          <BreadcrumbsItem text="Payments" href="#payments" />
        </Breadcrumbs>
      }
      actions={
        <>
          <AvatarGroup data={team} size="small" maxCount={3} />
          <Button>Share</Button>
          <Button appearance="primary">Create work item</Button>
          <IconButton icon={MoreIcon} label="More actions" />
        </>
      }
      bottomBar={
        <>
          <div style={{ width: '14rem' }}>
            <TextField aria-label="Search board" placeholder="Search board" />
          </div>
          <Button iconBefore={FilterIcon}>Filter</Button>
        </>
      }
    >
      Payments board
    </PageHeader>
  );
}
