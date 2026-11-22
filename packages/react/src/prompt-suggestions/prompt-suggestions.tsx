// SPDX-License-Identifier: Apache-2.0
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';

export interface PromptSuggestionProps {
  /** What the prompt does, in a few words. */
  title: string;
  /** One line on what people get back. Cards show it; rows leave it out. */
  description?: string;
  icon?: ComponentType<IconProps>;
  /** The colour of the icon box. */
  color?: 'blue' | 'purple' | 'saffron' | 'lime' | 'neutral';
  /** A slash command that runs the same skill, such as "/summarize". */
  command?: string;
  onClick?: () => void;
  testId?: string;
}

/** A starting point for a conversation that fills or sends a prompt when picked. */
export function PromptSuggestion({ title, description, icon: Icon, color = 'neutral', command, onClick, testId }: PromptSuggestionProps) {
  return (
    <li className="il-suggest-item">
      <button type="button" className="il-suggest" data-color={color} onClick={onClick} data-testid={testId}>
        {Icon ? (
          <span className="il-suggest-icon">
            <Icon label="" />
          </span>
        ) : null}
        <span className="il-suggest-text">
          <span className="il-suggest-title">
            {title}
            {command ? <code className="il-suggest-command">{command}</code> : null}
          </span>
          {description ? <span className="il-suggest-description">{description}</span> : null}
        </span>
      </button>
    </li>
  );
}

export interface PromptSuggestionsProps {
  children: ReactNode;
  /** Names the group, such as "Suggested prompts". */
  label: string;
  /** Cards sit side by side with a description; list rows stack with the title only. */
  layout?: 'cards' | 'list';
  testId?: string;
}

/** A set of prompt suggestions, usually under the greeting of a new chat. */
export function PromptSuggestions({ children, label, layout = 'cards', testId }: PromptSuggestionsProps) {
  return (
    <ul className="il-suggestions" data-layout={layout} aria-label={label} data-testid={testId}>
      {children}
    </ul>
  );
}
