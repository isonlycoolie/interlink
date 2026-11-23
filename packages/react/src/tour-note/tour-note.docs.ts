// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { TourNoteProps } from './tour-note';

export const tourNoteDocs = docsFor<TourNoteProps>({
  name: "Tour note",
  package: '@interlink/react/tour-note',
  exports: ["TourNote"],
  description: "A tour note is a coach mark for first use: a solid note with a drawn arrow that points at the control it explains.",
  status: 'ga',
  category: "Onboarding",
  keywords: ["tour note", "coach mark", "onboarding", "first use", "hint", "walkthrough"],
  props: {
    content: {"type": "ReactNode", "description": "One short sentence about the control the note points at."},
    children: {"type": "ReactNode", "description": "The control the note explains. The note sits beside it and never covers it."},
    placement: {"type": "'right' | 'left' | 'bottom' | 'top'", "description": "Which side of the control the note sits on; the arrow points back.", "default": "'right'"},
    tone: {"type": "'blue' | 'purple' | 'saffron' | 'lime' | 'ink' | 'red'", "description": "Solid colour of the note and its arrow.", "default": "'blue'"},
    font: {"type": "'body' | 'hand'", "description": "Body text, or the handwritten face for a sketched feel.", "default": "'body'"},
    isOpen: {"type": "boolean", "description": "Show or hide the note.", "default": "true"},
    isBlock: {"type": "boolean", "description": "Lay the control out as a block, for tables and panels.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid on the note."},
  },
});
