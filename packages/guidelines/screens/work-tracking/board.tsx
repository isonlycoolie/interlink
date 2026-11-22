// SPDX-License-Identifier: Apache-2.0
'use client';
import { Avatar } from '@interlink/react/avatar';
import { Badge } from '@interlink/react/badge';
import { DateLabel } from '@interlink/react/date-label';
import { ObjectIcon } from '@interlink/react/object';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Tag } from '@interlink/react/tag';
import { STATUSES, type WorkItem } from './data';

/** One work item on the board. The whole card is a button that opens the item. */
function ItemCard({ item, onOpen }: { item: WorkItem; onOpen: (item: WorkItem) => void }) {
  return (
    <button type="button" className="scr-card il-focusable" onClick={() => onOpen(item)} aria-label={`${item.key} ${item.title}`}>
      <Stack space="space.100">
        <Text>{item.title}</Text>
        <Inline space="space.050" shouldWrap>
          {item.labels.map((l) => (
            <Tag key={l} text={l} />
          ))}
        </Inline>
        <Inline spread="space-between" alignBlock="center">
          <Inline space="space.075" alignBlock="center">
            <ObjectIcon type={item.type} />
            <Text size="small" color="color.text.subtle" weight="medium">
              {item.key}
            </Text>
            {item.due ? <DateLabel label={item.due.label} appearance={item.due.appearance} /> : null}
          </Inline>
          <Avatar name={item.assignee} size="small" />
        </Inline>
      </Stack>
    </button>
  );
}

/** Columns of work by status. */
export function Board({ items, onOpen }: { items: WorkItem[]; onOpen: (item: WorkItem) => void }) {
  return (
    <div className="scr-board">
      {STATUSES.map((status) => {
        const column = items.filter((i) => i.status === status);
        return (
          <section key={status} className="scr-column" aria-label={status}>
            <Inline space="space.100" alignBlock="center">
              <Text size="small" weight="semibold" color="color.text.subtle">
                {status.toUpperCase()}
              </Text>
              <Badge>{column.length}</Badge>
            </Inline>
            <Stack space="space.100">
              {column.map((item) => (
                <ItemCard key={item.key} item={item} onOpen={onOpen} />
              ))}
            </Stack>
          </section>
        );
      })}
    </div>
  );
}
