// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Box, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Checkbox } from '@interlink/react/checkbox';
import { Popup } from '@interlink/react/popup';

/** Title: Default */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Popup
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      placement="bottom-start"
      role="dialog"
      label="Filters"
      trigger={(triggerProps) => (
        <Button {...triggerProps} isSelected={isOpen} onClick={() => setOpen(!isOpen)}>
          Filters
        </Button>
      )}
      content={() => (
        <Box padding="space.200">
          <Stack space="space.100">
            <Checkbox label="Assigned to me" />
            <Checkbox label="Due this week" />
          </Stack>
        </Box>
      )}
    />
  );
}
