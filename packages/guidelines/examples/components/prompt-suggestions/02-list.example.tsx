// SPDX-License-Identifier: Apache-2.0
import EmailIcon from '@interlink/icons/core/email';
import PageIcon from '@interlink/icons/core/page';
import TasksIcon from '@interlink/icons/core/tasks';
import { PromptSuggestions, PromptSuggestion } from '@interlink/react/prompt-suggestions';

/** Title: List */
export default function Example() {
  return (
    <div>
      <PromptSuggestions label="Try asking" layout="list">
        <PromptSuggestion title="What changed on this page this week?" icon={PageIcon} />
        <PromptSuggestion title="Draft a reply to the latest comment" icon={EmailIcon} />
        <PromptSuggestion title="List my overdue work items" icon={TasksIcon} />
      </PromptSuggestions>
    </div>
  );
}
