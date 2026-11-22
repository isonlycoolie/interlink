// @interlink-dont tag.not-inline
// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Tag } from '@interlink/react/tag';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem" padding="space.200">
      <Text as="p">Draft the rollout plan with <Tag text="platform" color="purple" /> and share it with the team by Friday.</Text>
    </Card>
  );
}
