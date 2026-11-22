// SPDX-License-Identifier: Apache-2.0
import { Box, Stack, Text, xcss } from '@interlink/react/primitives';

const LEVELS = [
  { name: 'Sunken', surface: 'elevation.surface.sunken', shadow: null, use: 'Backdrop that groups content, such as board columns.' },
  { name: 'Default', surface: 'elevation.surface', shadow: null, use: 'The base page surface.' },
  { name: 'Raised', surface: 'elevation.surface.raised', shadow: 'elevation.shadow.raised', use: 'Cards that can be moved or opened.' },
  { name: 'Overlay', surface: 'elevation.surface.overlay', shadow: 'elevation.shadow.overlay', use: 'Menus, popups, dialogs, floating toolbars.' },
] as const;

const tile = (surface: string, shadow: string | null) =>
  xcss({ backgroundColor: surface as never, boxShadow: (shadow ?? undefined) as never, borderRadius: 'radius.large', padding: 'space.200', minHeight: '7rem' });
const tiles = LEVELS.map((l) => tile(l.surface, l.shadow));
const stage = xcss({ backgroundColor: 'elevation.surface.sunken', borderRadius: 'radius.large', padding: 'space.300' });

/** The four elevation levels, each with its surface and shadow pairing. */
export function ElevationStack() {
  return (
    <div className="spec-elevation">
      {LEVELS.map((l, i) => (
        <Box key={l.name} xcss={tiles[i]}>
          <Stack space="space.050">
            <Text weight="bold">{l.name}</Text>
            <Text size="small"><code>{l.surface}</code></Text>
            {l.shadow ? <Text size="small"><code>{l.shadow}</code></Text> : null}
            <Text size="small" color="color.text.subtle">{l.use}</Text>
          </Stack>
        </Box>
      ))}
    </div>
  );
}

const card = xcss({ backgroundColor: 'elevation.surface.raised', boxShadow: 'elevation.shadow.raised', borderRadius: 'radius.medium', padding: 'space.150' });
const cardHover = xcss({ backgroundColor: 'elevation.surface.raised.hovered', boxShadow: 'elevation.shadow.raised', borderRadius: 'radius.medium', padding: 'space.150' });
const cardPress = xcss({ backgroundColor: 'elevation.surface.raised.pressed', boxShadow: 'elevation.shadow.raised', borderRadius: 'radius.medium', padding: 'space.150' });
const dragged = xcss({ backgroundColor: 'elevation.surface.overlay', boxShadow: 'elevation.shadow.overlay', borderRadius: 'radius.medium', padding: 'space.150', transform: 'rotate(2deg)' });
const scroller = xcss({ backgroundColor: 'elevation.surface', borderRadius: 'radius.medium', overflow: 'hidden' });
const scrolledHeader = xcss({ backgroundColor: 'elevation.surface', boxShadow: 'elevation.shadow.overflow', padding: 'space.150' });

/** Raised cards change surface when hovered or pressed, rise to overlay when dragged, and lists cast the overflow shadow when scrolled. */
export function ElevationStates() {
  return (
    <Box xcss={stage}>
      <div className="spec-elevation">
        <Box xcss={card}><Text>Default</Text></Box>
        <Box xcss={cardHover}><Text>Hovered</Text></Box>
        <Box xcss={cardPress}><Text>Pressed</Text></Box>
        <Box xcss={dragged}><Text>Dragged</Text></Box>
        <Box xcss={scroller}>
          <Box xcss={scrolledHeader}><Text weight="bold">Scrolled list</Text></Box>
          <Box padding="space.150"><Text size="small" color="color.text.subtle">Overflow shadow under the sticky header</Text></Box>
        </Box>
      </div>
    </Box>
  );
}

/** Sunken surface for grouping versus a neutral background for a control. */
export function SunkenVsNeutral() {
  return (
    <div className="spec-elevation">
      <Box backgroundColor="elevation.surface.sunken" padding="space.200">
        <Stack space="space.100">
          <Text weight="bold">elevation.surface.sunken</Text>
          <Box xcss={card}><Text size="small">Cards grouped in a column</Text></Box>
          <Box xcss={card}><Text size="small">Second card</Text></Box>
        </Stack>
      </Box>
      <Box backgroundColor="color.background.neutral" padding="space.200">
        <Stack space="space.100">
          <Text weight="bold">color.background.neutral</Text>
          <Text size="small" color="color.text.subtle">A control or tag background; not a layer.</Text>
        </Stack>
      </Box>
    </div>
  );
}
