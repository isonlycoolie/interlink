// SPDX-License-Identifier: Apache-2.0
/** First Interlink mark: two linked rounded squares, then the wordmark. Replaceable once a designed logo exists. */
export function Logo() {
  return (
    <span className="site-logo">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="15" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="11" y="11" width="15" height="15" rx="4" fill="var(--il-background-brand-bold)" />
        <path d="M11 17h6v-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span className="site-logo-text">Interlink Design</span>
    </span>
  );
}
