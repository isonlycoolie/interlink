// SPDX-License-Identifier: Apache-2.0
import { AppShape, PageArea, PageLines } from '../../../src/kit';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { PageHeader } from '@interlink/react/page-header';

export default function Example() {
  return (
    <AppShape>
      <PageArea>
        <PageHeader breadcrumbs={<Breadcrumbs><BreadcrumbsItem text="Finance" href="#" /><BreadcrumbsItem text="Money out" href="#" /></Breadcrumbs>} actions={<><Button>Export</Button><Button appearance="primary">New payout</Button></>}>Payouts</PageHeader>
        <PageLines rows={4} />
      </PageArea>
    </AppShape>
  );
}
