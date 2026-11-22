// SPDX-License-Identifier: Apache-2.0
import { Button, ButtonGroup } from '@interlink/react/button';

/** Title: Button group */
export default function Example() {
  return (
    <ButtonGroup label="Page actions">
      <Button>Share</Button>
      <Button>Export</Button>
      <Button appearance="primary">Publish</Button>
    </ButtonGroup>
  );
}
