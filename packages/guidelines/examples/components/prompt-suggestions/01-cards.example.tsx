// SPDX-License-Identifier: Apache-2.0
import BookIcon from '@interlink/icons/core/book-with-bookmark';
import ChartIcon from '@interlink/icons/core/chart-trend-up';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { PromptSuggestions, PromptSuggestion } from '@interlink/react/prompt-suggestions';

/** Title: Cards */
export default function Example() {
  return (
    <PromptSuggestions label="Suggested prompts">
      <PromptSuggestion title="Summarise" command="/summarize" description="The key points of a page or thread." icon={BookIcon} color="blue" />
      <PromptSuggestion title="Plan work" command="/plan" description="Break a goal into tasks with owners." icon={RoadmapIcon} color="purple" />
      <PromptSuggestion title="Find trends" command="/analyse" description="What changed in last month’s numbers." icon={ChartIcon} color="lime" />
    </PromptSuggestions>
  );
}
