// SPDX-License-Identifier: Apache-2.0
import { Avatar } from '@interlink/react/avatar';
import { Inline } from '@interlink/react/primitives';
import { people } from '../../../src/people';

/** Title: Sizes */
export default function Example() {
  const { name, photo } = people.amara;
  return (
    <Inline space="space.100" alignBlock="center">
      {(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'] as const).map((size) => (
        <Avatar key={size} name={name} src={photo} size={size} />
      ))}
    </Inline>
  );
}
