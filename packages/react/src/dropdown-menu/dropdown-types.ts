// SPDX-License-Identifier: Apache-2.0
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import type { Placement } from '../layering/place';
import type { MenuSpacing } from '../menu/menu-group';
import type { TriggerProps } from '../popup/popup-base';

export interface CustomTriggerProps extends TriggerProps {
  isSelected: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  testId?: string;
}

export interface DropdownMenuProps {
  /** Button text, or a render function for a custom trigger such as an icon button. */
  trigger: string | ((props: CustomTriggerProps) => ReactNode);
  children?: ReactNode;
  placement?: Placement;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (args: { isOpen: boolean; event?: Event | MouseEvent | KeyboardEvent }) => void;
  shouldFlip?: boolean;
  /** Shows a spinner in place of the items. */
  isLoading?: boolean;
  /** Announced while loading. */
  statusLabel?: string;
  spacing?: MenuSpacing;
  /** Accessible name of the menu. */
  label?: string;
  testId?: string;
}
