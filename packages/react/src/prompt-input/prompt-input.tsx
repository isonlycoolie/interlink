// SPDX-License-Identifier: Apache-2.0
'use client';
import AddIcon from '@interlink/icons/core/add';
import ArrowUpIcon from '@interlink/icons/core/arrow-up';
import MicrophoneIcon from '@interlink/icons/core/microphone';
import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { IconButton } from '../button/icon-button';

export interface PromptInputProps {
  /** Accessible name of the text box, such as "Message Planner". */
  label: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Called with the text when people press Enter or the send button. Shift+Enter adds a line. */
  onSubmit?: (value: string) => void;
  /** Called by the add button, for example to open a menu to attach files or mention people. */
  onAdd?: () => void;
  /** Called by the microphone button; the button is hidden without it. */
  onVoice?: () => void;
  /** Context chips shown under the text, such as attached pages or people. */
  context?: ReactNode;
  /** Controls at the end of the toolbar, such as a mode menu. */
  tools?: ReactNode;
  isDisabled?: boolean;
  /** While the answer is generating, the send button is disabled. */
  isGenerating?: boolean;
  testId?: string;
}

/** Where people talk to an agent: a growing text box with attach, context, mode and send. */
export function PromptInput({ label, placeholder = 'Ask anything, or type / for skills', value, defaultValue = '', onChange, onSubmit, onAdd, onVoice, context, tools, isDisabled = false, isGenerating = false, testId }: PromptInputProps) {
  const id = useId();
  const area = useRef<HTMLTextAreaElement | null>(null);
  const [own, setOwn] = useState(defaultValue);
  const text = value ?? own;
  useLayoutEffect(() => {
    const el = area.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [text]);
  const set = (v: string) => {
    setOwn(v);
    onChange?.(v);
  };
  const send = () => {
    if (!text.trim() || isGenerating || isDisabled) return;
    onSubmit?.(text.trim());
    if (value === undefined) setOwn('');
  };
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };
  return (
    <div className="il-prompt" data-disabled={isDisabled || undefined} data-testid={testId}>
      <label htmlFor={id} className="il-visually-hidden">
        {label}
      </label>
      <textarea ref={area} id={id} className="il-prompt-text" rows={1} placeholder={placeholder} value={text} disabled={isDisabled} onChange={(e) => set(e.target.value)} onKeyDown={onKeyDown} />
      <div className="il-prompt-toolbar">
        <div className="il-prompt-start">
          {onAdd ? <IconButton appearance="subtle" spacing="compact" icon={AddIcon} label="Add context" onClick={onAdd} isDisabled={isDisabled} /> : null}
          {context ? <div className="il-prompt-context">{context}</div> : null}
        </div>
        <div className="il-prompt-tools">
          {tools}
          {onVoice ? <IconButton appearance="subtle" spacing="compact" icon={MicrophoneIcon} label="Speak" onClick={onVoice} isDisabled={isDisabled} /> : null}
          <IconButton appearance="primary" spacing="compact" icon={ArrowUpIcon} label={isGenerating ? 'Generating' : 'Send'} onClick={send} isDisabled={isDisabled || isGenerating || !text.trim()} />
        </div>
      </div>
    </div>
  );
}
