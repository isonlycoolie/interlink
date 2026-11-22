// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import type { MouseEvent, ReactNode, Ref } from 'react';
import { Button } from '../button/button';
import { AssistMark } from './assist-mark';

export interface AssistButtonProps {
  /** What people ask the assistant to do, such as "Ask Interlink" or "Improve writing". */
  children: ReactNode;
  /** Shows a chevron, for a button that opens a menu of assistant actions. */
  hasMenu?: boolean;
  appearance?: 'default' | 'subtle';
  spacing?: 'default' | 'compact';
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean | 'menu' | 'dialog';
  testId?: string;
  ref?: Ref<HTMLButtonElement>;
}

/** A button for an AI action. The assist mark makes clear it is powered by AI, even among ordinary actions. */
export function AssistButton({ children, hasMenu = false, appearance = 'default', spacing = 'default', ...rest }: AssistButtonProps) {
  return (
    <Button {...rest} appearance={appearance} spacing={spacing} iconBefore={AssistMark} iconAfter={hasMenu ? ChevronDownIcon : undefined}>
      {children}
    </Button>
  );
}
