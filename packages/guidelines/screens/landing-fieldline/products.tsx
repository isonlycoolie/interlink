// SPDX-License-Identifier: Apache-2.0
import Automation from '@interlink/illustrations/art/automation';
import ConnectApps from '@interlink/illustrations/art/connect-apps';
import KnowledgeSearch from '@interlink/illustrations/art/knowledge-search';
import Launch from '@interlink/illustrations/art/launch';
import NoData from '@interlink/illustrations/art/no-data';
import Security from '@interlink/illustrations/art/security';
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import { Reveal, stagger } from '../shared/reveal';

const PRODUCTS = [
  { Art: Launch, name: 'Workers', text: 'Run code in 330 cities with no servers to manage.', tag: 'Compute' },
  { Art: NoData, name: 'Tables', text: 'A SQL database that copies itself close to readers.', tag: 'Data' },
  { Art: ConnectApps, name: 'Queues', text: 'Retry payments and webhooks until they land.', tag: 'Messaging' },
  { Art: KnowledgeSearch, name: 'Vectors', text: 'Search by meaning for assistants and support bots.', tag: 'AI' },
  { Art: Security, name: 'Shield', text: 'Stop attacks and bots before they reach your app.', tag: 'Security' },
  { Art: Automation, name: 'Cron', text: 'Schedules that run on time, in the region you choose.', tag: 'Compute' },
];

/** Six products on cards, each with its illustration on a quiet tile. */
export function Products() {
  return (
    <section className="lnd-section" id="products" aria-labelledby="fld-products-title">
      <div className="lnd-wrap">
        <p className="lnd-eyebrow">Products</p>
        <h2 id="fld-products-title" className="lnd-h2">Everything an app needs, one bill</h2>
        <Reveal className="fld-products">
          {PRODUCTS.map(({ Art, name, text, tag }, i) => (
            <a key={name} href={`#${name.toLowerCase()}`} className="fld-product" style={stagger(i)}>
              <span className="fld-product-art">
                <Art size="small" />
              </span>
              <span className="fld-product-tag">{tag}</span>
              <span className="fld-product-name">
                {name} <ArrowRightIcon label="" size="small" />
              </span>
              <span className="fld-product-text">{text}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
