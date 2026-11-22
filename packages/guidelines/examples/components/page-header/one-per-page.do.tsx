// SPDX-License-Identifier: Apache-2.0
import { AppShape, PageArea, PageLines } from '../../../src/kit';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { Heading, Stack } from '@interlink/react/primitives';
import { PageHeader } from '@interlink/react/page-header';

export default function Example() {
  return (
    <AppShape>
      <PageArea>
        <PageHeader breadcrumbs={<Breadcrumbs><BreadcrumbsItem text="Payments" href="#" /><BreadcrumbsItem text="Work items" href="#" /></Breadcrumbs>} actions={<><Button>Share</Button></>}>All open</PageHeader>
        <Stack space="space.150">
          <Heading as="h2" size="small">Design</Heading>
          <PageLines rows={3} />
        </Stack>
      </PageArea>
    </AppShape>
  );
}
