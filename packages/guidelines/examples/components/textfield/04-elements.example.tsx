// SPDX-License-Identifier: Apache-2.0
import SearchIcon from '@interlink/icons/core/search';
import { TextField } from '@interlink/react/textfield';

/** Title: Elements before and after */
export default function Example() {
  return (
    <TextField aria-label="Search" placeholder="Search" elemBeforeInput={<SearchIcon label="" />} width="medium" />
  );
}
