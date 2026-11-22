// SPDX-License-Identifier: Apache-2.0
'use client';
import type { IconColor, IconProps } from '@interlink/icons';
import CrossIcon from '@interlink/icons/core/cross';
import StatusDiscoveryIcon from '@interlink/icons/core/status-discovery';
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusInformationIcon from '@interlink/icons/core/status-information';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { Children, Fragment, isValidElement, useState, type ComponentType, type ReactNode } from 'react';
import { IconButton } from '../button/icon-button';
import { Inline, Stack } from '../primitives/layout';
import { Heading } from '../primitives/text';

export type SectionMessageAppearance = 'information' | 'warning' | 'error' | 'success' | 'discovery';

const SCHEMA: Record<SectionMessageAppearance, { Icon: ComponentType<IconProps>; color: IconColor }> = {
  information: { Icon: StatusInformationIcon, color: 'color.icon.information' },
  warning: { Icon: StatusWarningIcon, color: 'color.icon.warning' },
  error: { Icon: StatusErrorIcon, color: 'color.icon.danger' },
  success: { Icon: StatusSuccessIcon, color: 'color.icon.success' },
  discovery: { Icon: StatusDiscoveryIcon, color: 'color.icon.discovery' },
};

export interface SectionMessageProps {
  appearance?: SectionMessageAppearance;
  title?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  /** Up to two SectionMessageAction elements. */
  actions?: ReactNode;
  icon?: ComponentType<IconProps>;
  /** Names the icon when the title does not already say what kind of message this is. */
  iconLabel?: string;
  isDismissible?: boolean;
  onDismiss?: () => void;
  testId?: string;
}

/** A message about a section of the page, shown inline with its content. */
export function SectionMessage({ appearance = 'information', title, headingLevel = 'h2', children, actions, icon, iconLabel = '', isDismissible, onDismiss, testId }: SectionMessageProps) {
  const [dismissed, setDismissed] = useState(false);
  if (isDismissible && dismissed) return null;
  const { Icon: DefaultIcon, color } = SCHEMA[appearance];
  const Icon = icon ?? DefaultIcon;
  const list = Children.toArray(isValidElement<{ children?: ReactNode }>(actions) && actions.type === Fragment ? actions.props.children : actions);
  return (
    <section className="il-section-message" data-appearance={appearance} data-testid={testId}>
      <Inline space="space.200" alignBlock="stretch">
        <div className="il-section-message-icon">
          <Icon label={iconLabel} color={color} spacing="spacious" />
        </div>
        <Stack space="space.100" testId={testId && `${testId}--content`} grow="fill">
          {title ? (
            <Heading as={headingLevel} size="small">
              {title}
            </Heading>
          ) : null}
          <div className="il-section-message-content">{children}</div>
          {list.length > 0 ? (
            <Inline shouldWrap separator="·" space="space.100" rowSpace="space.0" role={list.length > 1 ? 'list' : undefined} testId={testId && `${testId}--actions`}>
              {list.map((a, i) => (
                <Inline key={i} role={list.length > 1 ? 'listitem' : undefined}>
                  {a}
                </Inline>
              ))}
            </Inline>
          ) : null}
        </Stack>
        {isDismissible ? (
          <div className="il-section-message-dismiss">
            <IconButton
              icon={CrossIcon}
              label="Dismiss"
              appearance="subtle"
              spacing="compact"
              testId={testId && `${testId}--dismiss-button`}
              onClick={() => {
                onDismiss?.();
                setDismissed(true);
              }}
            />
          </div>
        ) : null}
      </Inline>
    </section>
  );
}
