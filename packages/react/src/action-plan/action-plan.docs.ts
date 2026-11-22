// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ActionPlanProps } from './action-plan';

export const actionPlanDocs = docsFor<ActionPlanProps>({
  name: "Action plan",
  package: '@interlink/react/action-plan',
  exports: ["ActionPlan"],
  description: "The steps an agent will take, on a timeline people can check before and during the run.",
  status: 'beta',
  category: "Assist",
  keywords: ["plan", "steps", "agent", "timeline", "tasks"],
  props: {
    title: {"type": "string", "description": "Names the plan."},
    steps: {"type": "{ id, title, detail?, status: 'done' | 'current' | 'upcoming' | 'failed' }[]", "description": "The steps in order."},
    actions: {"type": "ReactNode", "description": "Buttons under the plan, such as Run plan."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
