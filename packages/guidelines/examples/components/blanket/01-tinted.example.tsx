// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Button } from '@interlink/react/button';
import { Blanket } from '@interlink/react/blanket';

/** Title: Tinted */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show blanket</Button>
      {isOpen ? <Blanket isTinted onBlanketClicked={() => setOpen(false)} /> : null}
    </>
  );
}
