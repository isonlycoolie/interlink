// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Link } from '@interlink/react/link';

/** Title: Appearance */
export default function Example() {
  return (
    <Stack space="space.100">
      <Link href="#default">Default link</Link>
      <Link href="#subtle" appearance="subtle">Subtle link</Link>
      <Link href="#new" target="_blank">Opens in a new window</Link>
    </Stack>
  );
}
