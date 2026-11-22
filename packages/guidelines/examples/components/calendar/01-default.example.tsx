// SPDX-License-Identifier: Apache-2.0
import { Calendar } from '@interlink/react/calendar';

/** Title: Default */
export default function Example() {
  return (
    <Calendar defaultSelected={['2026-05-14']} defaultFocused="2026-05-14" />
  );
}
