// SPDX-License-Identifier: Apache-2.0
import type { ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from 'react';
import { ButtonContent, buttonAttrs, guardClick, type BaseProps, type IconProp } from './button-base';

type NativeButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style' | 'disabled' | 'children'>;

export interface IconButtonProps extends NativeButton, BaseProps {
  icon: IconProp;
  /** Required: names the action for screen readers. */
  label: string;
  shape?: 'default' | 'circle';
  ref?: Ref<HTMLButtonElement>;
}

/** A button with only an icon. The label is still required and is read by assistive tech. */
export function IconButton({ icon: Icon, label, shape = 'default', appearance, spacing, isDisabled, isSelected, isLoading, testId, onClick, type = 'button', ref, ...rest }: IconButtonProps) {
  const base = { appearance, spacing, isDisabled, isSelected, isLoading, testId };
  return (
    <button
      {...rest}
      {...buttonAttrs({ ...base, iconOnly: true, shape: shape === 'circle' ? 'circle' : undefined })}
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-pressed={isSelected || undefined}
      aria-disabled={isLoading || undefined}
      onClick={guardClick(Boolean(isLoading), onClick as (e: MouseEvent<HTMLButtonElement>) => void)}
    >
      <span className="il-button-icon">
        <Icon label={label} color="currentColor" />
      </span>
      <ButtonContent {...base} />
    </button>
  );
}

export interface ButtonGroupProps {
  children: ReactNode;
  /** Names the group for assistive tech. */
  label?: string;
  testId?: string;
}

/** Buttons that belong together, spaced evenly. */
export function ButtonGroup({ children, label, testId }: ButtonGroupProps) {
  return (
    <div className="il-button-group" role="group" aria-label={label} data-testid={testId}>
      {children}
    </div>
  );
}
