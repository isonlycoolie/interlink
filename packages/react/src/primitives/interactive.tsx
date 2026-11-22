// SPDX-License-Identifier: Apache-2.0
import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from 'react';
import { mergeXcss } from '../xcss/xcss';
import { testIdProps, type BasePrimitiveProps, type StyleProp } from './types';

export type PressableProps = Omit<ComponentPropsWithoutRef<'button'>, 'disabled' | 'style' | 'className'> &
  BasePrimitiveProps &
  StyleProp & {
    children?: ReactNode;
    isDisabled?: boolean;
    ref?: Ref<HTMLButtonElement>;
  };

/** An unstyled button with a focus ring. The base for anything clickable that is not a link. */
export function Pressable({ children, isDisabled, xcss, style, testId, type = 'button', ref, ...rest }: PressableProps) {
  const s = mergeXcss(xcss);
  return (
    <button
      {...rest}
      {...testIdProps(testId)}
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={`il-pressable il-focusable ${s.className}`.trim()}
      style={{ ...s.style, ...style }}
    >
      {children}
    </button>
  );
}

export type AnchorProps = Omit<ComponentPropsWithoutRef<'a'>, 'style' | 'className'> &
  BasePrimitiveProps &
  StyleProp & {
    href: string;
    children?: ReactNode;
    /** Announced after the link text when it opens in a new window. */
    newWindowLabel?: string;
    ref?: Ref<HTMLAnchorElement>;
  };

/** An unstyled link with a focus ring. Opening a new window is announced to screen readers. */
export function Anchor({ href, children, newWindowLabel = '(opens new window)', target, rel, xcss, style, testId, ref, ...rest }: AnchorProps) {
  const s = mergeXcss(xcss);
  const opensNewWindow = target === '_blank';
  return (
    <a
      {...rest}
      {...testIdProps(testId)}
      ref={ref}
      href={href}
      target={target}
      rel={opensNewWindow ? (rel ?? 'noopener noreferrer') : rel}
      className={`il-anchor il-focusable ${s.className}`.trim()}
      style={{ ...s.style, ...style }}
    >
      {children}
      {opensNewWindow ? <span className="il-visually-hidden"> {newWindowLabel}</span> : null}
    </a>
  );
}

export type FocusableProps<T extends ElementType = 'div'> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'style'> &
  BasePrimitiveProps &
  StyleProp & {
    as?: T;
    children?: ReactNode;
    /** Draw the ring inside the element, for elements clipped by their container. */
    isInset?: boolean;
    ref?: Ref<HTMLElement>;
  };

/** Adds the standard focus ring to any focusable element. */
export function Focusable<T extends ElementType = 'div'>(props: FocusableProps<T>) {
  const { as, children, isInset, xcss, style, testId, ref, ...rest } = props as FocusableProps<'div'>;
  const Component: ElementType = as ?? 'div';
  const s = mergeXcss(xcss);
  return (
    <Component {...rest} {...testIdProps(testId)} ref={ref as never} className={`il-focusable${isInset ? ' il-focusable-inset' : ''} ${s.className}`.trim()} style={{ ...s.style, ...style }}>
      {children}
    </Component>
  );
}

/** Content for screen readers only. */
export function VisuallyHidden({ children, as: Component = 'span', id, testId }: { children: ReactNode; as?: 'span' | 'div'; id?: string; testId?: string }) {
  return (
    <Component id={id} {...testIdProps(testId)} className="il-visually-hidden">
      {children}
    </Component>
  );
}
