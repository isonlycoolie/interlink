// SPDX-License-Identifier: Apache-2.0
import { tokenNames } from '@interlink/tokens';
import type { ReactNode } from 'react';

const cssVar = (name: string) => `var(${(tokenNames as Record<string, string>)[name] ?? '--il-text'})`;

/** A chip naming a design token, with a swatch of its color. */
export function TokenTag({ token }: { token: string }) {
  return (
    <span className="ilk-token-tag">
      <span className="ilk-token-swatch" style={{ background: cssVar(token) }} aria-hidden="true" />
      <code>{token}</code>
    </span>
  );
}

/** A line with a dot, joining a TokenTag to the element it describes. */
export function Connector({ direction = 'vertical' }: { direction?: 'vertical' | 'horizontal' }) {
  return <span className="ilk-connector" data-direction={direction} aria-hidden="true" />;
}

/** A token tag pointing at its element: tag, line, element (top to bottom or left to right). */
export function Pointer({ token, children, direction = 'vertical', tagFirst = true }: { token: string; children: ReactNode; direction?: 'vertical' | 'horizontal'; tagFirst?: boolean }) {
  const tag = <TokenTag token={token} />;
  return (
    <span className="ilk-pointer" data-direction={direction}>
      {tagFirst ? tag : children}
      <Connector direction={direction} />
      {tagFirst ? children : tag}
    </span>
  );
}

/** A round avatar with initials on an accent background, for illustrations. */
export function AvatarShape({ initials, background = 'color.background.accent.gray.subtler', size = 'large' }: { initials: string; background?: string; size?: 'medium' | 'large' }) {
  return (
    <span className="ilk-avatar" data-size={size} style={{ background: cssVar(background) }} aria-hidden="true">
      {initials}
    </span>
  );
}
