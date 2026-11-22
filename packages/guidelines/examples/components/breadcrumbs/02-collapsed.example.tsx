// SPDX-License-Identifier: Apache-2.0
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';

/** Title: Collapsed */
export default function Example() {
  return (
    <Breadcrumbs maxItems={4}>
      <BreadcrumbsItem text="Home" href="#home" />
      <BreadcrumbsItem text="Teams" href="#teams" />
      <BreadcrumbsItem text="Design" href="#design" />
      <BreadcrumbsItem text="Projects" href="#projects" />
      <BreadcrumbsItem text="Website refresh" href="#website" />
      <BreadcrumbsItem text="Launch plan" href="#plan" />
    </Breadcrumbs>
  );
}
