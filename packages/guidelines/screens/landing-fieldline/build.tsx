// SPDX-License-Identifier: Apache-2.0
'use client';
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import { LinkButton } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

const SDK = [
  { lang: 'JavaScript', code: "import { Table } from '@fieldline/sdk';\n\nconst orders = new Table('orders');\nawait orders.insert({ id: 'ord_91', total: 48000, currency: 'KES' });\nconst today = await orders.where('day', '=', 'today').all();" },
  { lang: 'Python', code: "from fieldline import Table\n\norders = Table('orders')\norders.insert(id='ord_91', total=48000, currency='KES')\ntoday = orders.where('day', '=', 'today').all()" },
  { lang: 'Go', code: 'orders := fieldline.Table("orders")\nerr := orders.Insert(ctx, Order{ID: "ord_91", Total: 48000, Currency: "KES"})\ntoday, err := orders.Where("day", "=", "today").All(ctx)' },
];

/** The same few lines in each language, so people see the shape of the API before they sign up. */
export function Sdk() {
  return (
    <section className="lnd-section fld-sdk" id="docs" aria-labelledby="fld-sdk-title">
      <div className="lnd-wrap fld-sdk-grid">
        <div>
          <p className="lnd-eyebrow">Developers first</p>
          <h2 id="fld-sdk-title" className="lnd-h2">Five lines to your first table</h2>
          <p className="fld-text">Typed SDKs for the languages you already use, with local emulators and preview deploys for every pull request.</p>
          <LinkButton href="#docs-home">Read the docs</LinkButton>
        </div>
        <Tabs id="fld-sdk">
          <TabList aria-label="Language">
            {SDK.map((s) => <Tab key={s.lang}>{s.lang}</Tab>)}
          </TabList>
          {SDK.map((s) => (
            <TabPanel key={s.lang}>
              <pre className="fld-code"><code>{s.code}</code></pre>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

const TIERS = [
  { name: 'Free', price: '$0', per: 'forever', items: ['100,000 requests a day', '1 GB of tables', 'Community support'], cta: 'Start free' },
  { name: 'Builder', price: '$5', per: 'a month, then usage', items: ['10 million requests included', '25 GB of tables', 'Email support in one day'], cta: 'Start building', isPopular: true },
  { name: 'Enterprise', price: 'Custom', per: 'billed yearly', items: ['Data residency in Africa or the EU', 'Single sign-on and audit logs', 'A named engineer, 24/7'], cta: 'Talk to sales' },
];

export function Pricing() {
  return (
    <section className="lnd-section fld-pricing" id="pricing" aria-labelledby="fld-price-title">
      <div className="lnd-wrap">
        <p className="lnd-eyebrow">Pricing</p>
        <h2 id="fld-price-title" className="lnd-h2">Pay for what runs, not for what idles</h2>
        <div className="fld-tiers">
          {TIERS.map((t) => (
            <article key={t.name} className="fld-tier" data-popular={t.isPopular || undefined}>
              <h3>
                {t.name} {t.isPopular ? <Lozenge appearance="discovery">Most teams</Lozenge> : null}
              </h3>
              <p className="fld-price"><strong>{t.price}</strong> {t.per}</p>
              <ul>
                {t.items.map((it) => <li key={it}><CheckMarkIcon label="" size="small" />{it}</li>)}
              </ul>
              <LinkButton appearance={t.isPopular ? 'primary' : 'default'} href="#start" shouldFitContainer>{t.cta}</LinkButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
