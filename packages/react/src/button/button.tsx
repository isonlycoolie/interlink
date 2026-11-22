// SPDX-License-Identifier: Apache-2.0
'use client';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from 'react';
import { ButtonContent, buttonAttrs, guardClick, type BaseProps, type IconProp } from './button-base';

type NativeButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style' | 'disabled' | 'children'>;
type NativeAnchor = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'style' | 'children' | 'href'>;

export interface ButtonProps extends NativeButton, BaseProps {
  children?: ReactNode;
  iconBefore?: IconProp;
  iconAfter?: IconProp;
  ref?: Ref<HTMLButtonElement>;
}

/** Triggers an action. Use one primary button per area. */
export function Button({ appearance, spacing, isDisabled, isSelected, isLoading, shouldFitContainer, testId, iconBefore, iconAfter, children, onClick, type = 'button', ref, ...rest }: ButtonProps) {
  const base = { appearance, spacing, isDisabled, isSelected, isLoading, shouldFitContainer, testId };
  return (
    <button
      {...rest}
      {...buttonAttrs({ ...base, iconBefore, iconAfter })}
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-pressed={isSelected || undefined}
      aria-disabled={isLoading || undefined}
      onClick={guardClick(Boolean(isLoading), onClick as (e: MouseEvent<HTMLButtonElement>) => void)}
    >
      <ButtonContent {...base} iconBefore={iconBefore} iconAfter={iconAfter}>
        {children}
      </ButtonContent>
    </button>
  );
}

export interface LinkButtonProps extends NativeAnchor, Omit<BaseProps, 'isLoading'> {
  href: string;
  children?: ReactNode;
  iconBefore?: IconProp;
  iconAfter?: IconProp;
  /** Announced when the link opens in a new window. */
  newWindowLabel?: string;
  ref?: Ref<HTMLAnchorElement>;
}

/** Looks like a button, navigates like a link. Use when the action changes the URL. */
export function LinkButton({ appearance, spacing, isDisabled, isSelected, shouldFitContainer, testId, iconBefore, iconAfter, children, href, target, rel, newWindowLabel = '(opens new window)', onClick, ref, ...rest }: LinkButtonProps) {
  const base = { appearance, spacing, isDisabled, isSelected, shouldFitContainer, testId };
  const newWindow = target === '_blank';
  return (
    <a
      {...rest}
      {...buttonAttrs({ ...base, iconBefore, iconAfter })}
      ref={ref}
      href={isDisabled ? undefined : href}
      target={target}
      rel={newWindow ? (rel ?? 'noopener noreferrer') : rel}
      role={isDisabled ? 'link' : undefined}
      aria-disabled={isDisabled || undefined}
      onClick={guardClick(Boolean(isDisabled), onClick as (e: MouseEvent<HTMLAnchorElement>) => void)}
    >
      <ButtonContent {...base} iconBefore={iconBefore} iconAfter={iconAfter}>
        {children}
        {newWindow ? <span className="il-visually-hidden"> {newWindowLabel}</span> : null}
      </ButtonContent>
    </a>
  );
}
