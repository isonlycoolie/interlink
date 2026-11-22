// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AvatarProps } from './avatar';

export const avatarDocs = docsFor<AvatarProps>({
  name: "Avatar",
  package: '@interlink/react/avatar',
  exports: ["Avatar", "AvatarGroup"],
  description: "An avatar shows a picture or initials for a person, team or project.",
  status: 'ga',
  category: "Images and icons",
  keywords: ["avatar", "person", "user", "profile", "picture"],
  props: {
    name: {"type": "string", "description": "Name for the accessible label and initials."},
    src: {"type": "string", "description": "Image URL; initials show if it fails."},
    size: {"type": "'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'", "description": "Display size.", "default": "'medium'"},
    appearance: {"type": "'circle' | 'square'", "description": "Square for projects and teams.", "default": "'circle'"},
    presence: {"type": "'online' | 'busy' | 'focus' | 'offline'", "description": "Availability indicator."},
    status: {"type": "'approved' | 'declined' | 'locked'", "description": "Status indicator."},
    label: {"type": "string", "description": "Overrides the accessible name."},
    href: {"type": "string", "description": "Makes the avatar a link."},
    onClick: {"type": "(event) => void", "description": "Makes the avatar a button."},
    borderColor: {"type": "string", "description": "Ring color when avatars overlap."},
    isDisabled: {"type": "boolean", "description": "Dims and disables the avatar.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
