// SPDX-License-Identifier: Apache-2.0
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import type { ReactNode } from 'react';

export type ActionStepStatus = 'done' | 'current' | 'upcoming' | 'failed';

export interface ActionStep {
  id: string;
  /** What the agent does in this step, as a short action: "Read the sprint board". */
  title: string;
  /** Detail under the step: what it found, or what it will touch. */
  detail?: ReactNode;
  status: ActionStepStatus;
}

export interface ActionPlanProps {
  /** Names the plan, such as "Plan to close the sprint". */
  title: string;
  steps: ActionStep[];
  /** Actions under the plan, such as Run plan and Edit. */
  actions?: ReactNode;
  testId?: string;
}

const STATUS: Record<ActionStepStatus, string> = { done: 'Done', current: 'In progress', upcoming: 'Not started', failed: 'Failed' };

/** The steps an agent will take, or is taking, shown on a timeline so people can check them before and during the run. */
export function ActionPlan({ title, steps, actions, testId }: ActionPlanProps) {
  return (
    <section className="il-plan" aria-label={title} data-testid={testId}>
      <h3 className="il-plan-title">{title}</h3>
      <ol className="il-plan-steps">
        {steps.map((s) => (
          <li key={s.id} className="il-plan-step" data-status={s.status} aria-current={s.status === 'current' ? 'step' : undefined}>
            <span className="il-plan-dot" aria-hidden="true">
              {s.status === 'done' ? <CheckMarkIcon label="" size="small" /> : null}
            </span>
            <span className="il-plan-text">
              <span className="il-plan-step-title">
                {s.title}
                <span className="il-visually-hidden">, {STATUS[s.status]}</span>
              </span>
              {s.detail ? <span className="il-plan-detail">{s.detail}</span> : null}
            </span>
          </li>
        ))}
      </ol>
      {actions ? <div className="il-plan-actions">{actions}</div> : null}
    </section>
  );
}
