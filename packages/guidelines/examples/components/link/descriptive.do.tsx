// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Link } from '@interlink/react/link';

export default function Example() {
  return (
    <Text as="p" size="large">The router needs clock and data inputs. <Link href="#sources">Explore recommended input sources</Link> for both.</Text>
  );
}
