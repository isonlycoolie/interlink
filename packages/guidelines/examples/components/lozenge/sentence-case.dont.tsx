// @interlink-dont lozenge.sentence-case
// SPDX-License-Identifier: Apache-2.0
import ArrowDownRightIcon from '@interlink/icons/core/arrow-down-right';
import { Inline } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Inline space="space.200">
      <Lozenge appearance="danger" iconBefore={ArrowDownRightIcon}>Off Track</Lozenge>
      <Lozenge appearance="danger" iconBefore={ArrowDownRightIcon}>OFF TRACK</Lozenge>
    </Inline>
  );
}
