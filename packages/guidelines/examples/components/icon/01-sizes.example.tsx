// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import { Inline } from '@interlink/react/primitives';

/** Title: Sizes */
export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <AddIcon label="Add" size="small" />
      <AddIcon label="Add" />
      <AddIcon label="Add" spacing="spacious" />
    </Inline>
  );
}
