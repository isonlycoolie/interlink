// SPDX-License-Identifier: Apache-2.0
import { ProgressIndicator } from '@interlink/react/progress-indicator';

/** Title: Default */
export default function Example() {
  return (
    <ProgressIndicator values={[1, 2, 3, 4]} selectedIndex={1} />
  );
}
