// SPDX-License-Identifier: Apache-2.0
import { byTopic, getGuideline, type Topic } from '@interlink/guidelines';
import { examples } from '@interlink/guidelines/registry';
import { sources } from '@interlink/guidelines/sources';
import { DoDont, DoDontGrid } from './do-dont';

/** One guideline rendered as live Do and Don't examples, with their code. Unknown ids fail the build. */
export function Guideline({ id }: { id: string }) {
  const g = getGuideline(id);
  if (!g) throw new Error(`Unknown guideline id: ${id}`);
  const ex = examples[id] ?? {};
  const src = sources[id] ?? {};
  const Do = ex.do;
  const Dont = ex.dont;
  return (
    <div className="doc-guideline" id={`guideline-${id}`} data-guideline={id}>
      <DoDontGrid>
        {Do && g.do ? (
          <DoDont kind="do" caption={g.do} code={src.do}>
            <Do />
          </DoDont>
        ) : null}
        {Dont && g.dont ? (
          <DoDont kind="dont" caption={g.dont} code={src.dont}>
            <Dont />
          </DoDont>
        ) : null}
      </DoDontGrid>
    </div>
  );
}

/** Every guideline in one section of a topic, as one grid of Do and Don't cards. */
export function Guidelines({ topic, section }: { topic: Topic; section: string }) {
  const cards = byTopic(topic, section).flatMap((g) => {
    const ex = examples[g.id] ?? {};
    const src = sources[g.id] ?? {};
    const Do = ex.do;
    const Dont = ex.dont;
    return [
      Do && g.do ? (
        <DoDont key={`${g.id}-do`} kind="do" caption={g.do} code={src.do}>
          <Do />
        </DoDont>
      ) : null,
      Dont && g.dont ? (
        <DoDont key={`${g.id}-dont`} kind="dont" caption={g.dont} code={src.dont}>
          <Dont />
        </DoDont>
      ) : null,
    ];
  });
  return (
    <div className="doc-guideline">
      <DoDontGrid>{cards}</DoDontGrid>
    </div>
  );
}
