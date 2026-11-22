// @interlink-dont page-header.full-pages-only
// SPDX-License-Identifier: Apache-2.0
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { ModalBody, ModalFooter, ModalContext } from '@interlink/react/modal-dialog';
import { ModalShape, PageLines } from '../../../src/kit';
import { PageHeader } from '@interlink/react/page-header';
import { useContext } from 'react';

function Title() {
  const titleId = useContext(ModalContext)?.titleId;
  return (
    <PageHeader id={titleId} breadcrumbs={<Breadcrumbs><BreadcrumbsItem text="Finance" href="#" /><BreadcrumbsItem text="Payouts" href="#" /></Breadcrumbs>} actions={<Button>Share</Button>}>
      Edit payout
    </PageHeader>
  );
}

export default function Example() {
  return (
    <ModalShape width="24rem">
      <ModalBody>
        <Title />
        <PageLines rows={2} />
      </ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Save</Button>
      </ModalFooter>
    </ModalShape>
  );
}
