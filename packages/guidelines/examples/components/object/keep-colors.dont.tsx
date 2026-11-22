// @interlink-dont object.keep-colors
// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import BugIcon from '@interlink/icons/core/bug';
import ChangesIcon from '@interlink/icons/core/changes';
import QuotationMarkIcon from '@interlink/icons/core/quotation-mark';
import StoryIcon from '@interlink/icons/core/story';
import { Inline } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <QuotationMarkIcon label="Blog" color="color.icon.accent.yellow" />
      <BugIcon label="Bug" color="color.icon.accent.blue" />
      <ChangesIcon label="Changes" color="color.icon.subtle" />
      <AddIcon label="New feature" color="color.icon.accent.magenta" />
      <StoryIcon label="Story" color="color.icon.accent.teal" />
      <AngleBracketsIcon label="Code" color="color.icon.accent.green" />
    </Inline>
  );
}
