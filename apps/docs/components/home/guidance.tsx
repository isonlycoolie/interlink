// SPDX-License-Identifier: Apache-2.0
import CheckIcon from '@interlink/icons/core/check-mark';
import CrossIcon from '@interlink/icons/core/cross';
import { getGuideline } from '@interlink/guidelines';
import { Button } from '@interlink/react/button';
import Link from 'next/link';
import { PixelWord } from './pixel';

/** One real rule from the system, as people and agents see it: the instruction, why, and a live Do and Don't. */
export function Guidance() {
  const rule = getGuideline('button.one-primary');
  if (!rule) return null;
  return (
    <section className="home-sell" aria-labelledby="home-guidance">
      <p className="home-hand">guidance that runs</p>
      <h2 id="home-guidance" className="home-sell-title"><PixelWord text="Built for agents" /></h2>
      <p className="home-sell-lead">Every Do and Don’t is live code with a stable id, so a person, a linter and an agent all read the same rule.</p>
      <div className="home-rule">
        <div className="home-rule-text">
          <h3>{rule.rule}</h3>
          <p>{rule.why}</p>
          <Link href="/components/button/usage" className="home-view">See every button rule</Link>
        </div>
        <figure className="home-rule-case" data-kind="do">
          <div className="home-rule-stage">
            <Button>Save draft</Button>
            <Button appearance="primary">Publish</Button>
          </div>
          <figcaption><span><CheckIcon label="" color="currentColor" size="small" /></span>Do · {rule.do}</figcaption>
        </figure>
        <figure className="home-rule-case" data-kind="dont">
          <div className="home-rule-stage">
            <Button appearance="primary">Save draft</Button>
            <Button appearance="primary">Publish</Button>
          </div>
          <figcaption><span><CrossIcon label="" color="currentColor" size="small" /></span>Don’t · {rule.dont}</figcaption>
        </figure>
      </div>
    </section>
  );
}
