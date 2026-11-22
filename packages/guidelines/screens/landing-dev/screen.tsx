// SPDX-License-Identifier: Apache-2.0
'use client';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import DataFlowIcon from '@interlink/icons/core/data-flow';
import LockLockedIcon from '@interlink/icons/core/lock-locked';
import PulseIcon from '@interlink/icons/core/pulse';
import { Banner } from '@interlink/react/banner';
import { Button, LinkButton } from '@interlink/react/button';
import { Link } from '@interlink/react/link';
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { ProgressTracker } from '@interlink/react/progress-tracker';
import { Tile } from '@interlink/react/tile';
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';
import { CodeSamples } from './code-samples';

const FEATURES: { Icon: ComponentType<IconProps>; title: string; body: string }[] = [
  { Icon: DataFlowIcon, title: 'Pipelines as code', body: 'Describe jobs in one file, review them like any other change, and roll back in a click.' },
  { Icon: PulseIcon, title: 'Live run logs', body: 'Stream every step as it runs, with timings and retries in one view.' },
  { Icon: LockLockedIcon, title: 'Scoped keys', body: 'Give each service only the access it needs, and rotate keys without downtime.' },
  { Icon: AngleBracketsIcon, title: 'Typed SDKs', body: 'First-class clients for JavaScript, Python and Go, generated from one schema.' },
];

/** A developer-platform landing page: announcement, code-first hero, features and a getting-started path. */
export default function LandingDevScreen() {
  return (
    <div className="scr-landing">
      <Banner appearance="announcement">Version 2 of the API is here, with streaming logs and typed SDKs.</Banner>
      <header className="scr-topbar">
        <Text weight="bold" size="large">Fieldline</Text>
        <nav aria-label="Main">
          <Inline space="space.300" alignBlock="center">
            <Link href="#docs" appearance="subtle">Docs</Link>
            <Link href="#api" appearance="subtle">API reference</Link>
            <Link href="#status" appearance="subtle">Status</Link>
            <Button appearance="primary">Get an API key</Button>
          </Inline>
        </nav>
      </header>
      <main>
        <section className="scr-hero" aria-labelledby="dev-hero-title">
          <Stack space="space.300">
            <Heading size="xxlarge" as="h1" id="dev-hero-title">Run data pipelines from three lines of code</Heading>
            <Text size="large" color="color.text.subtle">Fieldline schedules, runs and retries your jobs, so you can ship the logic and skip the plumbing.</Text>
            <Inline space="space.150">
              <Button appearance="primary">Start building</Button>
              <LinkButton href="#docs">Read the docs</LinkButton>
            </Inline>
          </Stack>
          <CodeSamples />
        </section>
        <section className="scr-section" aria-labelledby="dev-features-title">
          <Stack space="space.400">
            <Heading size="xlarge" as="h2" id="dev-features-title">Built for the way you work</Heading>
            <div className="scr-grid-4">
              {FEATURES.map(({ Icon, title, body }) => (
                <Stack key={title} space="space.150">
                  <Tile label="" size="large" backgroundColor="color.background.accent.blue.subtler">
                    <Icon label="" color="color.icon.accent.blue" />
                  </Tile>
                  <Heading size="small" as="h3">{title}</Heading>
                  <Text color="color.text.subtle">{body}</Text>
                </Stack>
              ))}
            </div>
          </Stack>
        </section>
        <section className="scr-section" aria-labelledby="dev-start-title">
          <Stack space="space.300">
            <Heading size="xlarge" as="h2" id="dev-start-title">Get started in three steps</Heading>
            <ProgressTracker
              label="Getting started"
              items={[
                { id: 'key', label: 'Create a key', percentageComplete: 100, status: 'visited', href: '#keys' },
                { id: 'install', label: 'Install the SDK', percentageComplete: 0, status: 'current' },
                { id: 'run', label: 'Run your first job', percentageComplete: 0, status: 'unvisited' },
              ]}
            />
          </Stack>
        </section>
      </main>
      <footer className="scr-footer">
        <Text size="small" color="color.text.subtle">© 2026 Fieldline. A sample product made to show Interlink.</Text>
      </footer>
    </div>
  );
}
