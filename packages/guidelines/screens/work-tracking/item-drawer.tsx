// SPDX-License-Identifier: Apache-2.0
'use client';
import { Avatar } from '@interlink/react/avatar';
import { Comment, CommentAction, CommentAuthor, CommentTime } from '@interlink/react/comment';
import { DateLabel } from '@interlink/react/date-label';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@interlink/react/drawer';
import { Label } from '@interlink/react/form';
import { Lozenge } from '@interlink/react/lozenge';
import { ObjectIcon } from '@interlink/react/object';
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { Select } from '@interlink/react/select';
import { STATUS_APPEARANCE, STATUSES, type Status, type WorkItem } from './data';

const OPTIONS = STATUSES.map((s) => ({ label: s, value: s }));

/** Details of one work item, with its status and discussion, in a drawer beside the board. */
export function ItemDrawer({ item, onClose, onStatus }: { item: WorkItem | null; onClose: () => void; onStatus: (item: WorkItem, status: Status) => void }) {
  return (
    <Drawer isOpen={!!item} onClose={onClose} width="wide" titleId="item-title">
      <DrawerSidebar>
        <DrawerCloseButton />
      </DrawerSidebar>
      <DrawerContent>
        {item ? (
          <Stack space="space.300">
            <Stack space="space.100">
              <Inline space="space.075" alignBlock="center">
                <ObjectIcon type={item.type} />
                <Text size="small" color="color.text.subtle">
                  {item.key}
                </Text>
              </Inline>
              <Heading size="large" as="h2" id="item-title">
                {item.title}
              </Heading>
              <Inline space="space.100" alignBlock="center">
                <Lozenge appearance={STATUS_APPEARANCE[item.status]}>{item.status}</Lozenge>
                {item.due ? <DateLabel label={`Due ${item.due.label}`} appearance={item.due.appearance} /> : null}
              </Inline>
            </Stack>
            <div className="scr-field-row">
              <Stack space="space.050">
                <Label htmlFor="item-status">Status</Label>
                <Select inputId="item-status" options={OPTIONS} value={{ label: item.status, value: item.status }} onChange={(v) => v && !Array.isArray(v) && onStatus(item, (v as { value: Status }).value)} />
              </Stack>
              <Stack space="space.050">
                <Text size="small" weight="semibold" color="color.text.subtle">
                  Assignee
                </Text>
                <Inline space="space.100" alignBlock="center">
                  <Avatar name={item.assignee} size="small" label="" />
                  <Text>{item.assignee}</Text>
                </Inline>
              </Stack>
            </div>
            <Stack space="space.200">
              <Heading size="small" as="h3">
                Activity
              </Heading>
              <Comment
                headingLevel={4}
                avatar={<Avatar name="Kai Moto" label="" />}
                author={<CommentAuthor>Kai Moto</CommentAuthor>}
                time={<CommentTime>3 hours ago</CommentTime>}
                content={<Text>I can pair on this tomorrow morning if that helps.</Text>}
                actions={[<CommentAction key="reply">Reply</CommentAction>]}
              />
            </Stack>
          </Stack>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
