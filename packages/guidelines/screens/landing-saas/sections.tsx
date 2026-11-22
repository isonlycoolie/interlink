// SPDX-License-Identifier: Apache-2.0
'use client';
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import { Avatar } from '@interlink/react/avatar';
import { Button } from '@interlink/react/button';
import { Comment, CommentAuthor, CommentTime } from '@interlink/react/comment';
import { Lozenge } from '@interlink/react/lozenge';
import { ObjectTile, type ObjectType } from '@interlink/react/object';
import { Heading, Inline, MetricText, Stack, Text } from '@interlink/react/primitives';

const FEATURES: { type: ObjectType; title: string; body: string }[] = [
  { type: 'task', title: 'Plan in one place', body: 'Boards, lists and timelines share the same work, so every team sees the same plan.' },
  { type: 'page', title: 'Write next to the work', body: 'Specs and notes live beside the tasks they describe, linked both ways.' },
  { type: 'incident', title: 'Catch problems early', body: 'Due dates and blocked work surface on their own, before they slip.' },
  { type: 'whiteboard', title: 'Think out loud', body: 'Sketch ideas on a shared canvas and turn sticky notes into tasks.' },
];

export function Features() {
  return (
    <section className="scr-section" aria-labelledby="features-title">
      <Stack space="space.400">
        <Heading size="xlarge" as="h2" id="features-title">Everything a team needs to ship</Heading>
        <div className="scr-grid-4">
          {FEATURES.map((f) => (
            <Stack key={f.title} space="space.150">
              <ObjectTile type={f.type} size="large" label="" />
              <Heading size="small" as="h3">{f.title}</Heading>
              <Text color="color.text.subtle">{f.body}</Text>
            </Stack>
          ))}
        </div>
      </Stack>
    </section>
  );
}

const PLANS = [
  { name: 'Free', price: '$0', note: 'Up to 10 people', items: ['Boards and lists', '2 GB storage', 'Community support'], cta: 'Start free' },
  { name: 'Team', price: '$8', note: 'Per person per month', items: ['Timelines', 'Unlimited storage', 'Guest access'], cta: 'Try Team free', popular: true },
  { name: 'Business', price: '$14', note: 'Per person per month', items: ['Advanced permissions', 'Audit log', 'Priority support'], cta: 'Contact us' },
];

export function Pricing() {
  return (
    <section className="scr-section" aria-labelledby="pricing-title">
      <Stack space="space.400" alignInline="center">
        <Heading size="xlarge" as="h2" id="pricing-title">Simple pricing</Heading>
        <div className="scr-grid-3">
          {PLANS.map((p) => (
            <div key={p.name} className="scr-plan" data-popular={p.popular || undefined}>
              <Stack space="space.200">
                <Inline spread="space-between" alignBlock="center">
                  <Heading size="medium" as="h3">{p.name}</Heading>
                  {p.popular ? <Lozenge appearance="discovery">Most popular</Lozenge> : null}
                </Inline>
                <Stack space="space.025">
                  <MetricText size="large">{p.price}</MetricText>
                  <Text size="small" color="color.text.subtle">{p.note}</Text>
                </Stack>
                <Stack as="ul" space="space.100">
                  {p.items.map((i) => (
                    <li key={i} className="scr-check">
                      <CheckMarkIcon label="" color="color.icon.success" />
                      <Text>{i}</Text>
                    </li>
                  ))}
                </Stack>
                <Button appearance={p.popular ? 'primary' : 'default'} shouldFitContainer>{p.cta}</Button>
              </Stack>
            </div>
          ))}
        </div>
      </Stack>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="scr-section scr-quote" aria-label="What teams say">
      <Comment
        headingLevel={3}
        avatar={<Avatar name="Lena Ruiz" size="large" label="" />}
        author={<CommentAuthor>Lena Ruiz, head of product</CommentAuthor>}
        time={<CommentTime>Using it for 2 years</CommentTime>}
        content={<Text size="large">We moved four tools into one. Planning meetings went from an hour to fifteen minutes, because everyone already sees the same board.</Text>}
      />
    </section>
  );
}
