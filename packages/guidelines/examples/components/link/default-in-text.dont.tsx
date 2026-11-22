// @interlink-dont link.default-in-text
// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Link } from '@interlink/react/link';

export default function Example() {
  return (
    <Text as="p" size="large">The signal router combines a pulse divider, <Link href="#register" appearance="subtle">a shift register</Link>, analog noise and several logic operations.</Text>
  );
}
