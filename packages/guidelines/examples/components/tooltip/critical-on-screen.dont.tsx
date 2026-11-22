// @interlink-dont tooltip.critical-on-screen
// SPDX-License-Identifier: Apache-2.0
import QuestionCircleIcon from '@interlink/icons/core/question-circle';
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card, TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Set password</Heading>
        <Inline space="space.075" alignBlock="center"><Label htmlFor="np">New password</Label><QuestionCircleIcon label="Password rules" size="small" /></Inline>
        <TextField id="np" type="password" />
        <TooltipShape>8 characters or more, with a number or symbol</TooltipShape>
      </Stack>
    </Card>
  );
}
