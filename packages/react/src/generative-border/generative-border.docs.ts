// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { GenerativeBorderProps } from './generative-border';

export const generativeBorderDocs = docsFor<GenerativeBorderProps>({
  name: "Generative border",
  package: '@interlink/react/generative-border',
  exports: ["GenerativeBorder"],
  description: "A four-colour border that marks an AI surface and turns while content is generated.",
  status: 'beta',
  category: "Assist",
  keywords: ["ai", "border", "generating", "loading", "glow"],
  props: {
    children: {"type": "ReactNode", "description": "The surface it wraps, such as a prompt box."},
    isGenerating: {"type": "boolean", "description": "Turns the border; still when false.", "default": "false"},
    radius: {"type": "'small' | 'medium' | 'large' | 'xlarge' | 'full'", "description": "Match the corner of the content.", "default": "'large'"},
    width: {"type": "'thin' | 'thick'", "description": "Border thickness.", "default": "'thin'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
