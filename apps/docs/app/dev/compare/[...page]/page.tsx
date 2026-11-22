// SPDX-License-Identifier: Apache-2.0
import fs from 'node:fs';
import path from 'node:path';
import { allGuidelines } from '@interlink/guidelines';
import { Guideline } from '@/components/mdx/guideline';

/**
 * Dev-only compare view: each reference image next to the live Interlink rebuild whose `basis` includes it.
 * Reference files exist only after `INTERLINK_REFERENCE=... node scripts/link-reference.mjs`; production builds
 * render a single notice page.
 */
interface RefItem {
  key: string;
  page: string;
  kind: string;
  section: string;
  caption: string;
  image: string;
}

const file = path.join(process.cwd(), 'public', '_reference', 'inventory.json');
const items: RefItem[] = process.env.INTERLINK_REFERENCE && fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
const byBasis = new Map(allGuidelines.flatMap((g) => g.basis.map((b) => [b.slice(b.indexOf(':') + 1), g.id] as const)));

export function generateStaticParams() {
  const pages = [...new Set(items.map((i) => i.page))];
  return pages.length ? pages.map((p) => ({ page: p.split('/').filter(Boolean) })) : [{ page: ['_'] }];
}

export default async function ComparePage({ params }: { params: Promise<{ page: string[] }> }) {
  const { page } = await params;
  const target = `/${page.join('/')}`;
  const list = items.filter((i) => i.page === target);
  if (!list.length) {
    return (
      <main id="main" className="dev-compare">
        <h1>Compare</h1>
        <p>No reference captures linked. Run the docs with INTERLINK_REFERENCE set to compare originals with rebuilds.</p>
      </main>
    );
  }
  const rules = list.filter((i) => i.kind !== 'diagram');
  const rebuilt = rules.filter((i) => byBasis.has(i.key)).length;
  const shown = new Set<string>();
  return (
    <main id="main" className="dev-compare">
      <h1>{target}</h1>
      <p>{`${rebuilt} of ${rules.length} Do/Don't items rebuilt · ${list.length - rules.length} diagrams`}</p>
      {list.map((i) => {
        const id = byBasis.get(i.key);
        const first = id && !shown.has(id);
        if (id) shown.add(id);
        return (
          <section key={i.key} className="dev-compare-row" data-missing={i.kind !== 'diagram' && !id ? '' : undefined}>
            <div>
              <p className="dev-compare-meta">{`${i.key} · ${i.kind} · ${i.section}`}</p>
              <img src={i.image} alt="" loading="lazy" />
              <p className="dev-compare-caption">{i.caption}</p>
            </div>
            <div>{first ? <Guideline id={id} /> : id ? <p className="dev-compare-meta">{`Shown above as ${id}`}</p> : <p className="dev-compare-meta">{i.kind === 'diagram' ? 'Covered by the page specimens' : 'Not rebuilt yet'}</p>}</div>
          </section>
        );
      })}
    </main>
  );
}
