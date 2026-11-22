// SPDX-License-Identifier: Apache-2.0
import { createContext, useContext } from 'react';

/** The background a primitive sits on, so text can pick a readable colour. */
export const SurfaceContext = createContext<string>('elevation.surface');
export const useSurface = () => useContext(SurfaceContext);

/** True inside a Text, so nested Text inherits size and colour. */
export const HasTextAncestorContext = createContext(false);
export const useHasTextAncestor = () => useContext(HasTextAncestorContext);

const INVERSE = 'color.text.inverse';
const WARNING_INVERSE = 'color.text.warning.inverse';
const BOLD = /^color\.background\.(neutral|selected|brand|danger|warning|success|discovery|information)\.(bold|boldest)(\.hovered|\.pressed)?$/;

/** Text colour that stays readable on a bold background, else undefined. */
export function inverseTextColor(surface: string): string | undefined {
  const m = surface.match(BOLD);
  if (!m) return undefined;
  if (m[2] === 'boldest' && m[1] !== 'brand') return undefined;
  if (m[1] === 'neutral' && m[2] !== 'bold') return undefined;
  return m[1] === 'warning' ? WARNING_INVERSE : INVERSE;
}

/** Normalise a test id into the data attribute primitives render. */
export const testIdProps = (testId?: string) => (testId ? { 'data-testid': testId } : {});
