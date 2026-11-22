// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { TileProps } from './tile';

export const tileDocs = docsFor<TileProps>({
  name: "Tile",
  package: '@interlink/react/tile',
  exports: ["Tile"],
  description: "A tile is a square container for an icon, emoji or image.",
  status: 'ga',
  category: "Images and icons",
  keywords: ["tile", "icon", "emoji", "square"],
  props: {
    label: {"type": "string", "description": "Accessible name; empty when text beside it says the same."},
    size: {"type": "'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'", "description": "16px to 48px; match the content next to it.", "default": "'medium'"},
    isInset: {"type": "boolean", "description": "Pad icons and emoji; off fills the tile with an image.", "default": "true"},
    hasBorder: {"type": "boolean", "description": "Adds a border.", "default": "false"},
    backgroundColor: {"type": "background token name", "description": "Background, such as color.background.accent.blue.subtler.", "default": "'color.background.neutral'"},
    children: {"type": "ReactNode", "description": "Icon, emoji or image."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
