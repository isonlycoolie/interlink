// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { FlagProps } from './flag';

export const flagDocs = docsFor<FlagProps>({
  name: "Flag",
  package: '@interlink/react/flag',
  exports: ["Flag", "AutoDismissFlag", "FlagGroup", "FlagsProvider", "useFlags"],
  description: "A flag is a short notification at the bottom of the screen about an event or action.",
  status: 'ga',
  category: "Messaging",
  keywords: ["flag", "toast", "notification", "snackbar"],
  props: {
    id: {"type": "string | number", "description": "Unique id, passed to onDismissed."},
    title: {"type": "ReactNode", "description": "What happened, in a few words."},
    description: {"type": "ReactNode", "description": "More detail."},
    icon: {"type": "ReactNode", "description": "Status icon; defaults to the appearance."},
    appearance: {"type": "'normal' | 'info' | 'success' | 'warning' | 'error'", "description": "Bold appearances collapse their description.", "default": "'normal'"},
    actions: {"type": "{ content, onClick?, href? }[]", "description": "Up to two short actions."},
    onDismissed: {"type": "(id) => void", "description": "Called when dismissed."},
    headingLevel: {"type": "1 | 2 | 3 | 4 | 5 | 6", "description": "Heading level of the title.", "default": "2"},
    onMouseOver: {"type": "(event) => void", "description": "Pointer enters."},
    onMouseOut: {"type": "(event) => void", "description": "Pointer leaves."},
    onFocus: {"type": "(event) => void", "description": "Focus enters."},
    onBlur: {"type": "(event) => void", "description": "Focus leaves."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
