// SPDX-License-Identifier: Apache-2.0
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';

/** Title: Default */
export default function Example() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem text="Home" href="#home" />
      <BreadcrumbsItem text="Projects" href="#projects" />
      <BreadcrumbsItem text="Website refresh" href="#website" />
    </Breadcrumbs>
  );
}
