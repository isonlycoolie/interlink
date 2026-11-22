// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { BannerProps } from './banner';

export const bannerDocs = docsFor<BannerProps>({
  name: "Banner",
  package: '@interlink/react/banner',
  exports: ["Banner"],
  description: "A banner is a full-width message at the top of the page about something that affects the whole product.",
  status: 'ga',
  category: "Messaging",
  keywords: ["banner", "announcement", "alert", "notice"],
  props: {
    appearance: {"type": "'warning' | 'error' | 'announcement'", "description": "Warnings and errors are announced.", "default": "'warning'"},
    icon: {"type": "ReactElement", "description": "Status icon before the text."},
    children: {"type": "ReactNode", "description": "One short line."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLDivElement>", "description": "Ref to the banner."},
  },
});
