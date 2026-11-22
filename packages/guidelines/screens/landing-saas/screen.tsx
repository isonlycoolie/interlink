// SPDX-License-Identifier: Apache-2.0
'use client';
import { Avatar } from '@interlink/react/avatar';
import { Button, LinkButton } from '@interlink/react/button';
import { DateLabel } from '@interlink/react/date-label';
import { Link } from '@interlink/react/link';
import { Lozenge } from '@interlink/react/lozenge';
import { ObjectIcon } from '@interlink/react/object';
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { ProgressBar } from '@interlink/react/progress-bar';
import { Tile } from '@interlink/react/tile';
import { Features, Pricing, Testimonial } from './sections';

/** A small, real product preview in the hero, made from the same components as the product. */
function Preview() {
  const rows = [
    { type: 'story' as const, title: 'New onboarding flow', who: 'Nia Park', state: 'In progress', tone: 'information' as const, due: 'Fri', due2: 'neutral' as const },
    { type: 'bug' as const, title: 'Export drops the last row', who: 'Kai Moto', state: 'To do', tone: 'neutral' as const, due: 'Today', due2: 'warning' as const },
    { type: 'task' as const, title: 'Update the pricing page', who: 'Lena Ruiz', state: 'Done', tone: 'success' as const, due: 'Mon', due2: 'neutral' as const },
  ];
  return (
    <div className="scr-preview" aria-hidden="true">
      <Stack space="space.200">
        <Inline spread="space-between" alignBlock="center">
          <Heading size="small" as="div">Spring launch</Heading>
          <Text size="small" color="color.text.subtle">68% done</Text>
        </Inline>
        <ProgressBar value={0.68} ariaLabel="Spring launch" />
        {rows.map((r) => (
          <Inline key={r.title} spread="space-between" alignBlock="center">
            <Inline space="space.100" alignBlock="center">
              <ObjectIcon type={r.type} label="" />
              <Text>{r.title}</Text>
            </Inline>
            <Inline space="space.100" alignBlock="center">
              <DateLabel label={r.due} appearance={r.due2} />
              <Lozenge appearance={r.tone}>{r.state}</Lozenge>
              <Avatar name={r.who} size="small" label="" />
            </Inline>
          </Inline>
        ))}
      </Stack>
    </div>
  );
}

/** A product landing page for a work-management tool, built only from Interlink. */
export default function LandingSaasScreen() {
  return (
    <div className="scr-landing">
      <header className="scr-topbar">
        <Inline space="space.100" alignBlock="center">
          <Tile label="" size="small" backgroundColor="color.background.brand.bold">
            <span className="scr-logo-mark">L</span>
          </Tile>
          <Text weight="bold" size="large">Lumen</Text>
        </Inline>
        <nav aria-label="Main">
          <Inline space="space.300" alignBlock="center">
            <Link href="#features" appearance="subtle">Features</Link>
            <Link href="#pricing" appearance="subtle">Pricing</Link>
            <Link href="#customers" appearance="subtle">Customers</Link>
            <Button appearance="subtle">Log in</Button>
            <Button appearance="primary">Get started</Button>
          </Inline>
        </nav>
      </header>
      <main>
        <section className="scr-hero" aria-labelledby="hero-title">
          <Stack space="space.300">
            <Lozenge appearance="discovery">New: timelines for every plan</Lozenge>
            <Heading size="xxlarge" as="h1" id="hero-title">Plan, track and ship work your whole team can see</Heading>
            <Text size="large" color="color.text.subtle">Lumen brings tasks, docs and timelines together, so nobody has to ask where things stand.</Text>
            <Inline space="space.150">
              <Button appearance="primary">Start free</Button>
              <LinkButton href="#demo">Watch a demo</LinkButton>
            </Inline>
          </Stack>
          <Preview />
        </section>
        <Features />
        <Testimonial />
        <Pricing />
        <section className="scr-cta" aria-labelledby="cta-title">
          <Stack space="space.200" alignInline="center">
            <Heading size="large" as="h2" id="cta-title" color="color.text.inverse">Bring your team together this week</Heading>
            <Button appearance="default">Create a free workspace</Button>
          </Stack>
        </section>
      </main>
      <footer className="scr-footer">
        <Text size="small" color="color.text.subtle">© 2026 Lumen. A sample product made to show Interlink.</Text>
      </footer>
    </div>
  );
}
