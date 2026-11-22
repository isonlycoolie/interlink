// SPDX-License-Identifier: Apache-2.0
'use client';
import { PopupBase, type PopupProps } from './popup-base';

export type { ContentProps, PopupProps, TriggerProps } from './popup-base';

/**
 * A layer anchored to a trigger, in the top layer so it is never clipped. Closes on Escape and outside clicks,
 * moves focus in when it opens and back to the trigger when it closes.
 */
export function Popup(props: PopupProps) {
  return <PopupBase {...props} />;
}
