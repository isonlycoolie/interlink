// @interlink-dont page-header.one-per-page
// SPDX-License-Identifier: Apache-2.0
import { AppShape, PageArea, PageLines } from '../../../src/kit';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { PageHeader } from '@interlink/react/page-header';

export default function Example() {
  return (
    <AppShape>
      <PageArea>
        <PageHeader breadcrumbs={<Breadcrumbs><BreadcrumbsItem text="Payments" href="#" /><BreadcrumbsItem text="Work items" href="#" /></Breadcrumbs>} actions={<><Button>Share</Button></>}>All open</PageHeader>
        <PageLines rows={1} />
        <PageHeader actions={<Button>Edit</Button>}>Design</PageHeader>
        <PageLines rows={1} />
      </PageArea>
    </AppShape>
  );
}
