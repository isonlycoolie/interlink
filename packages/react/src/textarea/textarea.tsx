// SPDX-License-Identifier: Apache-2.0
'use client';
import { useCallback, useEffect, useRef, type ChangeEvent, type Ref, type TextareaHTMLAttributes } from 'react';

type Native = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style' | 'disabled' | 'readOnly' | 'required'>;

export interface TextAreaProps extends Native {
  appearance?: 'standard' | 'subtle' | 'none';
  /** `smart` grows with the content up to maxHeight; the others are native resize handles. */
  resize?: 'auto' | 'vertical' | 'horizontal' | 'smart' | 'none';
  /** Minimum visible lines. */
  minimumRows?: number;
  /** Maximum height before scrolling, as any CSS height. */
  maxHeight?: string;
  isCompact?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isMonospaced?: boolean;
  testId?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

/** A multi-line text input for longer answers such as descriptions and comments. */
export function TextArea({ appearance = 'standard', resize = 'smart', minimumRows = 3, maxHeight = '50vh', isCompact, isDisabled, isInvalid, isReadOnly, isRequired, isMonospaced, testId, ref, onChange, ...rest }: TextAreaProps) {
  const inner = useRef<HTMLTextAreaElement | null>(null);
  const grow = useCallback(() => {
    const el = inner.current;
    if (!el || resize !== 'smart') return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [resize]);
  useEffect(grow, [grow, rest.value]);
  const setRef = (el: HTMLTextAreaElement | null) => {
    inner.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) (ref as { current: HTMLTextAreaElement | null }).current = el;
  };
  const on = (v?: boolean) => (v ? '' : undefined);
  return (
    <div
      className="il-textarea"
      data-appearance={appearance}
      data-resize={resize}
      data-compact={on(isCompact)}
      data-disabled={on(isDisabled)}
      data-invalid={on(isInvalid)}
      data-monospaced={on(isMonospaced)}
      style={{ ['--rows' as string]: minimumRows }}
    >
      <textarea
        {...rest}
        ref={setRef}
        className="il-textarea-input"
        rows={minimumRows}
        style={{ maxHeight }}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid || undefined}
        data-testid={testId}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          grow();
          onChange?.(e);
        }}
      />
    </div>
  );
}
