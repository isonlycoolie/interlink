// SPDX-License-Identifier: Apache-2.0
import { Button, ButtonGroup } from '@interlink/react/button';

export default function Example() {
  return (
    <ButtonGroup label="Edit actions">
      <Button>Cancel</Button>
      <Button appearance="primary">Save</Button>
    </ButtonGroup>
  );
}
