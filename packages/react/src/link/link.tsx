// SPDX-License-Identifier: Apache-2.0
import type { AnchorHTMLAttributes, ReactNode, Ref } from 'react';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'style'> {
  href: string;
  children: ReactNode;
  /** `subtle` only where context already says it is a link, such as navigation lists. */
  appearance?: 'default' | 'subtle' | 'inverse';
  /** Announced when the link opens in a new window. */
  newWindowLabel?: string;
  testId?: string;
  ref?: Ref<HTMLAnchorElement>;
}

/** Takes people to another page or place. Use a button for actions. */
export function Link({ href, children, appearance = 'default', target, rel, newWindowLabel = '(opens new window)', testId, ref, ...rest }: LinkProps) {
  const newWindow = target === '_blank';
  return (
    <a {...rest} ref={ref} href={href} target={target} rel={newWindow ? (rel ?? 'noopener noreferrer') : rel} className="il-link il-focusable" data-appearance={appearance} data-testid={testId}>
      {children}
      {newWindow ? <span className="il-visually-hidden"> {newWindowLabel}</span> : null}
    </a>
  );
}
