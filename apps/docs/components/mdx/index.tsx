// SPDX-License-Identifier: Apache-2.0
import { SectionMessage } from '@interlink/react/section-message';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';
import { ColorRoles, PaletteRamps } from '../specimens/color';
import { AccentGrid, EmphasisLadder, InteractionStates, InverseOnBold } from '../specimens/color-states';
import { ElevationStack, ElevationStates, SunkenVsNeutral } from '../specimens/elevation';
import { BorderSpecimen, RadiusScale } from '../specimens/shape';
import { SpacingBands, SpacingScale } from '../specimens/spacing-scale';
import { TokenTable } from '../specimens/token-table';
import { FontFamilies, TypeScale, WeightScale } from '../specimens/type';
import { IconGallery } from '../specimens/icon-gallery';
import { CodeFrame } from './code-block';
import { ComponentIntro, ExampleSet, PropsTable } from './component-parts';
import { DoDont, DoDontGrid, Example } from './do-dont';
import { Guideline, Guidelines } from './guideline';

function Callout({ appearance = 'information', title, children }: { appearance?: ComponentProps<typeof SectionMessage>['appearance']; title?: string; children: ReactNode }) {
  return (
    <div className="doc-callout">
      <SectionMessage appearance={appearance} title={title as string} headingLevel="h4">
        {children}
      </SectionMessage>
    </div>
  );
}

/** Elements and components available in every MDX page. */
export const mdxComponents: MDXComponents = {
  h2: (p) => <h2 className="doc-h2" {...p} />,
  h3: (p) => <h3 className="doc-h3" {...p} />,
  h4: (p) => <h4 className="doc-h4" {...p} />,
  p: (p) => <p className="doc-p" {...p} />,
  ul: (p) => <ul className="doc-list" {...p} />,
  ol: (p) => <ol className="doc-list" {...p} />,
  table: (p) => (
    <div className="doc-table-wrap">
      <table className="doc-table" {...p} />
    </div>
  ),
  a: (p) => <a className="doc-link il-focusable" {...p} />,
  pre: (p) => (
    <CodeFrame>
      <pre {...p} />
    </CodeFrame>
  ),
  DoDont,
  DoDontGrid,
  Example,
  Callout,
  Guideline,
  Guidelines,
  SpacingScale,
  SpacingBands,
  PaletteRamps,
  ColorRoles,
  EmphasisLadder,
  InverseOnBold,
  InteractionStates,
  AccentGrid,
  ElevationStack,
  ElevationStates,
  SunkenVsNeutral,
  BorderSpecimen,
  RadiusScale,
  TypeScale,
  WeightScale,
  FontFamilies,
  TokenTable,
  ExampleSet,
  PropsTable,
  ComponentIntro,
  IconGallery,
};
