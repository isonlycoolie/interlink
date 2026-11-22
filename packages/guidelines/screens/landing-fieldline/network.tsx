// SPDX-License-Identifier: Apache-2.0
import { Reveal, stagger } from '../shared/reveal';
import { CITIES, WORLD } from './world';

const W = 72 * 10;
const H = WORLD.length * 10;
/** Same grid as the map: columns every 5 degrees of longitude, rows every 4.67 degrees of latitude from 77.7N. */
const at = (lon: number, lat: number) => ({ x: (lon + 180) * 2, y: ((77.67 - lat) / 4.667) * 10 + 5 });
const routes: [string, string][] = [['Lagos', 'London'], ['Nairobi', 'Frankfurt'], ['Nairobi', 'Mumbai'], ['Johannesburg', 'Sao Paulo'], ['Cairo', 'Frankfurt']];

/** The network as a dot map: grey land, saffron points of presence, lime for the new African sites, routes in purple. */
export function Network() {
  const city = (n: string) => CITIES.find((c) => c.name === n) ?? CITIES[0]!;
  return (
    <section className="lnd-section fld-network" aria-labelledby="fld-net-title">
      <div className="lnd-wrap">
        <p className="lnd-eyebrow">Global network</p>
        <h2 id="fld-net-title" className="lnd-h2">Close to your users, from Lagos to Tokyo</h2>
        <svg className="fld-map" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Map of ${CITIES.length} points of presence, ${CITIES.filter((c) => c.isNew).length} of them new in Africa: ${CITIES.map((c) => c.name).join(', ')}`}>
          {WORLD.flatMap((row, r) => [...row].map((ch, c) => (ch === '#' ? <circle key={`${r}-${c}`} className="fld-land" cx={c * 10 + 5} cy={r * 10 + 5} r="2.6" /> : null)))}
          {routes.map(([a, b]) => {
            const p = at(city(a).lon, city(a).lat);
            const q = at(city(b).lon, city(b).lat);
            return <path key={a + b} className="fld-route" d={`M${p.x} ${p.y} Q ${(p.x + q.x) / 2} ${Math.min(p.y, q.y) - 50} ${q.x} ${q.y}`} />;
          })}
          {CITIES.map((c) => {
            const p = at(c.lon, c.lat);
            return (
              <g key={c.name} className="fld-pop" data-new={c.isNew || undefined}>
                <circle className="fld-pop-ring" cx={p.x} cy={p.y} r="9" />
                <circle cx={p.x} cy={p.y} r="5" />
              </g>
            );
          })}
        </svg>
        <Reveal className="fld-net-stats">
          {[['330', 'cities'], ['7', 'new sites in Africa'], ['< 30 ms', 'from 90% of people online'], ['148 Tbps', 'network capacity']].map(([n, t], i) => (
            <p key={t} style={stagger(i)}>
              <strong>{n}</strong> {t}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
