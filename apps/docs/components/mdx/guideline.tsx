// SPDX-License-Identifier: Apache-2.0
import { byTopic, getGuideline, type Topic } from '@interlink/guidelines';
import { examples, sources } from '@interlink/guidelines/registry';
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

/** Every guideline in one section of a topic, in order. */
export function Guidelines({ topic, section }: { topic: Topic; section: string }) {
  return (
    <>
      {byTopic(topic, section).map((g) => (
        <Guideline key={g.id} id={g.id} />
      ))}
    </>
  );
}
