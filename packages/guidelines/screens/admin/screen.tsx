// SPDX-License-Identifier: Apache-2.0
'use client';
import SettingsIcon from '@interlink/icons/core/settings';
import { useState } from 'react';
import { AppFrame } from '../shared/frame';
import { Activity } from './activity';
import { Identities } from './identities';
import { Security } from './security';
import { AdminNav, type AdminView } from './side-nav';

/** Administration for agents: who can act, what they did, and what was blocked, each as its own page. */
export default function AdminScreen() {
  const [view, setView] = useState<AdminView>('identities');
  return (
    <AppFrame app={{ name: 'Administration', icon: SettingsIcon, color: 'ink' }} sideNav={<AdminNav view={view} onView={setView} />}>
      <div className="scr-page scr-admin">
        {view === 'identities' ? <Identities /> : view === 'activity' ? <Activity /> : <Security />}
      </div>
    </AppFrame>
  );
}
