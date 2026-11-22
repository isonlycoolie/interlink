// SPDX-License-Identifier: Apache-2.0
import type { ButtonHTMLAttributes } from 'react';
import { docsFor } from '../docs/types';
import type { ButtonProps } from './button';

/** Interlink props plus the native props worth documenting. */
type Documented = Omit<ButtonProps, keyof ButtonHTMLAttributes<HTMLButtonElement>> & { onClick: unknown; type: unknown; children: unknown };

export const buttonDocs = docsFor<Documented>({
  name: 'Button',
  package: '@interlink/react/button',
  exports: ['Button', 'IconButton', 'LinkButton', 'ButtonGroup'],
  description: 'A button triggers an action. Its label tells people what will happen next.',
  status: 'ga',
  category: 'Forms and input',
  keywords: ['button', 'action', 'submit', 'cta', 'click'],
  props: {
    appearance: { type: "'default' | 'primary' | 'subtle' | 'warning' | 'danger' | 'discovery'", default: "'default'", description: 'Visual emphasis. Use one primary button per area.' },
    spacing: { type: "'default' | 'compact'", default: "'default'", description: 'Compact buttons are 24px tall for dense areas such as tables.' },
    isDisabled: { type: 'boolean', default: 'false', description: 'Prevents interaction. Prefer explaining what is missing over disabling.' },
    isSelected: { type: 'boolean', default: 'false', description: 'Shows the button as toggled on; announced as pressed.' },
    isLoading: { type: 'boolean', default: 'false', description: 'Shows a spinner and blocks clicks while staying focusable.' },
    shouldFitContainer: { type: 'boolean', default: 'false', description: 'Stretches the button to the width of its container.' },
    iconBefore: { type: 'ComponentType<IconProps>', description: 'Icon shown before the label.' },
    iconAfter: { type: 'ComponentType<IconProps>', description: 'Icon shown after the label, such as a chevron for menus.' },
    children: { type: 'ReactNode', description: 'The label. Use a short verb phrase in sentence case.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
    ref: { type: 'Ref<HTMLButtonElement>', description: 'Ref to the button element.' },
    onClick: { type: '(event) => void', description: 'Called when the button is activated by pointer or keyboard.' },
    type: { type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type. Set submit inside forms.' },
  },
});
