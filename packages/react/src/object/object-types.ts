// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import ArrowUpIcon from '@interlink/icons/core/arrow-up';
import BranchIcon from '@interlink/icons/core/branch';
import BugIcon from '@interlink/icons/core/bug';
import CalendarIcon from '@interlink/icons/core/calendar';
import ChangesIcon from '@interlink/icons/core/changes';
import CommitIcon from '@interlink/icons/core/commit';
import DatabaseIcon from '@interlink/icons/core/database';
import EpicIcon from '@interlink/icons/core/epic';
import IncidentIcon from '@interlink/icons/core/incident';
import LightbulbIcon from '@interlink/icons/core/lightbulb';
import PageIcon from '@interlink/icons/core/page';
import ProblemIcon from '@interlink/icons/core/problem';
import PullRequestIcon from '@interlink/icons/core/pull-request';
import QuestionCircleIcon from '@interlink/icons/core/question-circle';
import QuotationMarkIcon from '@interlink/icons/core/quotation-mark';
import StoryIcon from '@interlink/icons/core/story';
import SubtasksIcon from '@interlink/icons/core/subtasks';
import TaskIcon from '@interlink/icons/core/task';
import WhiteboardIcon from '@interlink/icons/core/whiteboard';
import WorkItemIcon from '@interlink/icons/core/work-item';
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';

export type ObjectHue = 'blue' | 'red' | 'yellow' | 'purple' | 'green' | 'magenta' | 'teal';

/** Every object type with its glyph and assigned accent. The color is part of the meaning: never change it. */
export const OBJECTS = {
  blog: [QuotationMarkIcon, 'blue'],
  branch: [BranchIcon, 'blue'],
  bug: [BugIcon, 'red'],
  calendar: [CalendarIcon, 'red'],
  changes: [ChangesIcon, 'yellow'],
  code: [AngleBracketsIcon, 'purple'],
  commit: [CommitIcon, 'yellow'],
  database: [DatabaseIcon, 'purple'],
  epic: [EpicIcon, 'purple'],
  idea: [LightbulbIcon, 'yellow'],
  improvement: [ArrowUpIcon, 'green'],
  incident: [IncidentIcon, 'red'],
  'new-feature': [AddIcon, 'green'],
  page: [PageIcon, 'blue'],
  'page-live-doc': [PageIcon, 'magenta'],
  problem: [ProblemIcon, 'red'],
  'pull-request': [PullRequestIcon, 'green'],
  question: [QuestionCircleIcon, 'purple'],
  story: [StoryIcon, 'green'],
  subtask: [SubtasksIcon, 'blue'],
  task: [TaskIcon, 'blue'],
  whiteboard: [WhiteboardIcon, 'teal'],
  'work-item': [WorkItemIcon, 'blue'],
} as const satisfies Record<string, readonly [ComponentType<IconProps>, ObjectHue]>;

export type ObjectType = keyof typeof OBJECTS;
/** Default accessible names, from the type. */
export const objectLabel = (type: ObjectType) => type.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
