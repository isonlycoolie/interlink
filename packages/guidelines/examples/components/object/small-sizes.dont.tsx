// @interlink-dont object.small-sizes
// SPDX-License-Identifier: Apache-2.0
import BugIcon from '@interlink/icons/core/bug';
import TaskIcon from '@interlink/icons/core/task';
import { Inline } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <div style={{ width: '2.5rem' }}><TaskIcon label="Task" color="color.icon.accent.blue" shouldScale /></div>
      <div style={{ width: '2.5rem' }}><BugIcon label="Bug" color="color.icon.accent.red" shouldScale /></div>
    </Inline>
  );
}
