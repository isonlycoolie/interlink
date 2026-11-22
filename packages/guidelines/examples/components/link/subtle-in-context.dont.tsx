// @interlink-dont link.subtle-in-context
// SPDX-License-Identifier: Apache-2.0
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import LockLockedIcon from '@interlink/icons/core/lock-locked';
import ReleaseIcon from '@interlink/icons/core/release';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Link } from '@interlink/react/link';

export default function Example() {
  return (
    <Stack space="space.150">
      <Text size="small" weight="bold" color="color.text.subtle">Development</Text>
      <Inline space="space.100" alignBlock="center"><AngleBracketsIcon label="" /><Link href="#code">Code</Link></Inline>
      <Inline space="space.100" alignBlock="center"><LockLockedIcon label="" /><Link href="#security">Security</Link></Inline>
      <Inline space="space.100" alignBlock="center"><ReleaseIcon label="" /><Link href="#releases">Releases</Link></Inline>
    </Stack>
  );
}
