// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { FlagsProvider, useFlags } from '@interlink/react/flag';

function SaveButton() {
  const { showFlag } = useFlags();
  return (
    <Button appearance="primary" onClick={() => showFlag({ title: 'Changes saved', appearance: 'success', isAutoDismiss: true })}>
      Save
    </Button>
  );
}

/** Title: Raise flags from anywhere */
export default function Example() {
  return (
    <FlagsProvider>
      <SaveButton />
    </FlagsProvider>
  );
}
