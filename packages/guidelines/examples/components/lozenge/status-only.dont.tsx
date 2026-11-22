// @interlink-dont lozenge.status-only
// SPDX-License-Identifier: Apache-2.0
import TagIcon from '@interlink/icons/core/tag';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Lozenge appearance="danger" iconBefore={TagIcon}>Blog</Lozenge>
  );
}
