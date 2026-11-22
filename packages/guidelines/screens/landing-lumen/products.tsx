// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import VideoPlayIcon from '@interlink/icons/core/video-play-overlay';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { ChatMessage } from '@interlink/react/chat';
import { Link } from '@interlink/react/link';
import { SuggestionCard } from '@interlink/react/suggestion-card';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import type { ReactNode } from 'react';
import { people, scenes } from '../../src/people';
import { AppWindow } from './window';

const DocCard = () => (
  <div className="lml-doc" role="img" aria-label="A Lumen page with a team photo, a title and a short plan">
    <img src={scenes.teamMeeting} alt="" />
    <strong>Q3 launch: Kenya</strong>
    <span className="lml-lines" aria-hidden="true"><i /><i /><i /></span>
  </div>
);
const VideoCard = () => (
  <div className="lml-video" role="img" aria-label="A recorded video update with the speaker on camera">
    <img src={scenes.callsAndLaptop} alt="" />
    <span className="lml-video-play" aria-hidden="true"><VideoPlayIcon label="" /></span>
    <span className="lml-video-face" aria-hidden="true"><img src={people.kofi.photo} alt="" /></span>
  </div>
);
const AssistCard = () => (
  <div className="lml-assist">
    <ChatMessage from="user">Close the sprint and move what is left</ChatMessage>
    <ChatMessage from="agent" author="Planner" avatar={<AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="small" label="" />}>
      <SuggestionCard title="Move 4 items to sprint 15" reason="They are still open and keep their owners." />
    </ChatMessage>
  </div>
);

const PRODUCTS: { name: string; color: string; title: string; text: string; picture: ReactNode }[] = [
  { name: 'Docs', color: 'blue', title: 'Pages that stay up to date', text: 'Write plans together, live. Tables, timelines and mentions keep the page and the work in step.', picture: <DocCard /> },
  { name: 'Projects', color: 'lime', title: 'Boards that show the real state', text: 'Sprints, owners and due dates in one view, with agents that tidy the backlog for you.', picture: <AppWindow title="Payments sprint" /> },
  { name: 'Video', color: 'saffron', title: 'Updates people watch, not meetings', text: 'Record your screen and face, share a link, and get comments at the exact second.', picture: <VideoCard /> },
  { name: 'Assistant', color: 'purple', title: 'Agents that ask before they act', text: 'Ask in plain words. Agents read your spaces, propose the change, and wait for your yes.', picture: <AssistCard /> },
];

/** One tab per product; each shows the product on its own solid colour block. */
export function Products() {
  return (
    <section className="lnd-section" id="tour" aria-labelledby="lml-products-title">
      <div className="lnd-wrap">
        <p className="lnd-eyebrow">One platform</p>
        <h2 id="lml-products-title" className="lnd-h2">Four tools that already know each other</h2>
        <Tabs id="lumen-products">
          <TabList aria-label="Products">
            {PRODUCTS.map((p) => <Tab key={p.name}>{p.name}</Tab>)}
          </TabList>
          {PRODUCTS.map((p) => (
            <TabPanel key={p.name}>
              <div className="lml-product" data-color={p.color}>
                <div className="lml-product-text">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <Link href={`#${p.name.toLowerCase()}`}>
                    Explore {p.name} <ArrowRightIcon label="" size="small" />
                  </Link>
                </div>
                <div className="lml-product-picture">{p.picture}</div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
