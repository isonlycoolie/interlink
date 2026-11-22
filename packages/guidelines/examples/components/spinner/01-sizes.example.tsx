// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Spinner } from '@interlink/react/spinner';

/** Title: Sizes */
export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <Spinner size="xsmall" />
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </Inline>
  );
}
