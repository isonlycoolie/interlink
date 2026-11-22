// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { CommentProps } from './comment';

export const commentDocs = docsFor<CommentProps>({
  name: "Comment",
  package: '@interlink/react/comment',
  exports: ["Comment", "CommentAuthor", "CommentTime", "CommentEdited", "CommentAction", "CommentLayout"],
  description: "A comment shows a message in a discussion with who wrote it and when.",
  status: 'ga',
  category: "Text and data display",
  keywords: ["comment", "reply", "discussion", "thread"],
  props: {
    avatar: {"type": "ReactNode", "description": "The author avatar."},
    author: {"type": "ReactNode", "description": "CommentAuthor."},
    time: {"type": "ReactNode", "description": "CommentTime."},
    edited: {"type": "ReactNode", "description": "CommentEdited."},
    type: {"type": "ReactNode", "description": "A label such as Author."},
    restrictedTo: {"type": "ReactNode", "description": "Who can see it."},
    content: {"type": "ReactNode", "description": "The message."},
    actions: {"type": "ReactNode[]", "description": "CommentAction elements."},
    children: {"type": "ReactNode", "description": "Nested replies."},
    isSaving: {"type": "boolean", "description": "Shows saving text and hides actions.", "default": "false"},
    savingText: {"type": "string", "description": "Shown while saving.", "default": "'Sending\u2026'"},
    isError: {"type": "boolean", "description": "Shows error actions.", "default": "false"},
    errorActions: {"type": "ReactNode[]", "description": "Actions that resolve an error."},
    highlighted: {"type": "boolean", "description": "Marks a linked comment.", "default": "false"},
    headingLevel: {"type": "1 | 2 | 3 | 4 | 5 | 6", "description": "Heading level of the header.", "default": "3"},
    id: {"type": "string", "description": "Element id, for links to the comment."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
