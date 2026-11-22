// SPDX-License-Identifier: Apache-2.0
import { TextArea } from '@interlink/react/textarea';

/** Title: Resize and rows */
export default function Example() {
  return (
    <TextArea aria-label="Notes" resize="vertical" minimumRows={5} />
  );
}
