// SPDX-License-Identifier: Apache-2.0
import type { IconProps } from '@interlink/icons';
import type { ComponentType, MouseEvent, ReactNode } from 'react';
import { Spinner } from '../spinner/spinner';

export type ButtonAppearance = 'default' | 'primary' | 'subtle' | 'warning' | 'danger' | 'discovery';
export type ButtonSpacing = 'default' | 'compact';
export type IconProp = ComponentType<IconProps>;

export interface BaseProps {
  appearance?: ButtonAppearance;
  spacing?: ButtonSpacing;
  isDisabled?: boolean;
  isSelected?: boolean;
  isLoading?: boolean;
  shouldFitContainer?: boolean;
  testId?: string;
}

const BOLD = new Set(['primary', 'danger', 'discovery']);

/** Data attributes that drive every button style. */
export function buttonAttrs(p: BaseProps & { iconBefore?: unknown; iconAfter?: unknown; iconOnly?: boolean; shape?: string }) {
  const appearance = p.appearance ?? 'default';
  const interactive = !p.isDisabled && !p.isLoading;
  const on = (v: unknown) => (v ? '' : undefined);
  return {
    className: 'il-button il-focusable',
    'data-appearance': appearance,
    'data-spacing': p.spacing ?? 'default',
    'data-selected': on(p.isSelected),
    'data-disabled': on(p.isDisabled),
    'data-loading': on(p.isLoading),
    'data-interactive': on(interactive),
    'data-icon-before': on(p.iconBefore),
    'data-icon-after': on(p.iconAfter),
    'data-icon-button': on(p.iconOnly),
    'data-shape': p.shape,
    'data-fit': on(p.shouldFitContainer),
    'data-testid': p.testId,
  };
}

/** Icon, label, icon, plus the loading overlay. */
export function ButtonContent({ iconBefore: Before, iconAfter: After, children, appearance, spacing, isLoading, isSelected }: BaseProps & { iconBefore?: IconProp; iconAfter?: IconProp; children?: ReactNode }) {
  const invert = !isSelected && BOLD.has(appearance ?? 'default');
  return (
    <>
      {Before ? <span className="il-button-icon"><Before label="" color="currentColor" /></span> : null}
      {children !== undefined && children !== null ? <span className="il-button-text">{children}</span> : null}
      {After ? <span className="il-button-icon"><After label="" color="currentColor" /></span> : null}
      {isLoading ? (
        <span className="il-button-loading">
          <Spinner size={spacing === 'compact' ? 'xsmall' : 'small'} appearance={invert ? 'invert' : 'inherit'} />
        </span>
      ) : null}
    </>
  );
}

/** Swallow clicks while a button is busy or disabled but still focusable. */
export function guardClick<E extends MouseEvent>(blocked: boolean, onClick?: (e: E) => void) {
  return (e: E) => {
    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };
}
