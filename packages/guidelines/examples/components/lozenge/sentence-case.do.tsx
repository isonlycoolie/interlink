// SPDX-License-Identifier: Apache-2.0
import ArrowDownRightIcon from '@interlink/icons/core/arrow-down-right';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Lozenge appearance="danger" iconBefore={ArrowDownRightIcon}>Off track</Lozenge>
  );
}
