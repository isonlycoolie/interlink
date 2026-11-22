// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PopoverContentProps } from './popover';

export const spotlightDocs = docsFor<PopoverContentProps>({
  name: "Spotlight",
  package: '@interlink/react/spotlight',
  exports: ["PopoverProvider", "PopoverTarget", "PopoverContent", "SpotlightCard", "SpotlightHeader", "SpotlightHeadline", "SpotlightControls", "SpotlightDismissControl", "SpotlightMedia", "SpotlightBody", "SpotlightFooter", "SpotlightStepCount", "SpotlightActions", "SpotlightPrimaryAction", "SpotlightSecondaryAction"],
  description: "A spotlight introduces something new by pointing at it with a short message.",
  status: 'ga',
  category: "Onboarding",
  keywords: ["spotlight", "onboarding", "tour", "coach mark"],
  props: {
    children: {"type": "ReactNode", "description": "A SpotlightCard."},
    placement: {"type": "'top' | 'bottom' | 'left' | 'right' with '-start' or '-end'", "description": "Side of the target the card sits on."},
    isVisible: {"type": "boolean", "description": "Whether it shows.", "default": "true"},
    dismiss: {"type": "(event) => void", "description": "Close it: dismiss control, Escape or outside click."},
    back: {"type": "(event) => void", "description": "Previous step, for the secondary action."},
    next: {"type": "(event) => void", "description": "Next step, for the primary action."},
    done: {"type": "(event) => void", "description": "Finish, for the primary action on the last step."},
    shouldDismissOnClickOutside: {"type": "boolean", "description": "Close on a click outside.", "default": "false"},
    offset: {"type": "[number, number]", "description": "Shift along and away from the target.", "default": "[0, 12]"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
