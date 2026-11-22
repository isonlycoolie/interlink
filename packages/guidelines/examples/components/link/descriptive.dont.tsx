// @interlink-dont link.descriptive
// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Link } from '@interlink/react/link';

export default function Example() {
  return (
    <Text as="p" size="large">The router needs clock and data inputs. These can be any signal above one volt. <Link href="#sources">Learn more</Link></Text>
  );
}
