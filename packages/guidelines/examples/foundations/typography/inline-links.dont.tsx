// @interlink-dont typography.inline-links
// SPDX-License-Identifier: Apache-2.0
import { Anchor, Text, xcss } from '@interlink/react/primitives';

const link = xcss({ color: 'color.text', textDecorationLine: 'none' });

export default function Example() {
  return (
    <Text as="p" size="large" align="center">
      You are in a team-managed project. To change this, go to{' '}
      <Anchor href="#settings" xcss={link}>settings</Anchor>.
    </Text>
  );
}
