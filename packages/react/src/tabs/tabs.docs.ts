// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { TabsProps } from './tabs';

export const tabsDocs = docsFor<TabsProps>({
  name: "Tabs",
  package: '@interlink/react/tabs',
  exports: ["Tabs", "TabList", "Tab", "TabPanel"],
  description: "Tabs switch between views of related content in the same place.",
  status: 'ga',
  category: "Navigation",
  keywords: ["tabs", "tab", "views", "switch"],
  props: {
    id: {"type": "string", "description": "Unique id for tab and panel ids."},
    children: {"type": "ReactNode", "description": "One TabList and a TabPanel per Tab."},
    selected: {"type": "number", "description": "Controlled selected index."},
    defaultSelected: {"type": "number", "description": "Initial index.", "default": "0"},
    onChange: {"type": "(index) => void", "description": "Called when a tab is selected."},
    shouldUnmountTabPanelOnChange: {"type": "boolean", "description": "Unmount hidden panels.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
