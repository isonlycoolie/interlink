// SPDX-License-Identifier: Apache-2.0
import SearchIcon from '@interlink/icons/core/search';
import { Inline, Text } from '@interlink/react/primitives';

/** Title: Labels */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <SearchIcon label="" />
      <Text>Decorative: the text beside it names the action.</Text>
    </Inline>
  );
}
