// SPDX-License-Identifier: Apache-2.0
export interface ThinkingIndicatorProps {
  /** What the assistant is doing, such as "Thinking…" or "Searching pages…". */
  label?: string;
  /** Hide the text and keep it for screen readers only, for tight spaces. */
  isLabelHidden?: boolean;
  testId?: string;
}

/** Three squares in the assist colours that pulse in turn while the assistant works. */
export function ThinkingIndicator({ label = 'Thinking…', isLabelHidden = false, testId }: ThinkingIndicatorProps) {
  return (
    <span className="il-thinking" role="status" data-testid={testId}>
      <span className="il-thinking-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className={isLabelHidden ? 'il-visually-hidden' : 'il-thinking-label'}>{label}</span>
    </span>
  );
}
