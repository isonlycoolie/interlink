// SPDX-License-Identifier: Apache-2.0
import type { AnchorHTMLAttributes } from 'react';
import { docsFor } from '../docs/types';
import type { LinkProps } from './link';

type Documented = Omit<LinkProps, keyof AnchorHTMLAttributes<HTMLAnchorElement>> & Pick<LinkProps, 'href' | 'target' | 'children'>;

export const linkDocs = docsFor<Documented>({
  name: "Link",
  package: '@interlink/react/link',
  exports: ["Link"],
  description: "A link takes people to another page or place.",
  status: 'ga',
  category: "Navigation",
  keywords: ["link", "anchor", "href", "navigate"],
  props: {
    href: {"type": "string", "description": "Destination."},
    children: {"type": "ReactNode", "description": "Link text that describes the destination."},
    appearance: {"type": "'default' | 'subtle' | 'inverse'", "description": "Subtle only where context shows it is a link.", "default": "'default'"},
    target: {"type": "string", "description": "Use '_blank' sparingly; it is announced."},
    newWindowLabel: {"type": "string", "description": "Announced for new windows.", "default": "'(opens new window)'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLAnchorElement>", "description": "Ref to the anchor."},
  },
});
