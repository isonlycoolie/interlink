// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines } from '../define';

export const elevation = defineGuidelines([
  {
    id: 'elevation.surface-shadow-pairs',
    topic: 'elevation',
    section: 'Follow the recommended surface and shadow pairings',
    kind: 'pair',
    severity: 'must',
    rule: 'Pair each elevation surface with the shadow of the same level.',
    do: 'Give a menu the overlay surface and the overlay shadow together.',
    dont: 'Mix levels, such as the default surface with a raised shadow; it breaks in dark mode.',
    why: 'Surface and shadow are tuned as a pair. In dark mode the surface does most of the lifting, so a mismatched pair loses depth.',
    basis: ['ads:/foundations/elevation#17', 'ads:/foundations/elevation#18'],
  },
  {
    id: 'elevation.limit-floating',
    topic: 'elevation',
    section: 'Avoid excessive use of raised and overlay elevations',
    kind: 'pair',
    severity: 'should',
    rule: 'Group floating controls into one elevated container instead of lifting each one.',
    do: 'Collect related floating actions into a single toolbar.',
    dont: 'Float several buttons side by side, each with its own shadow.',
    why: 'Every elevated element competes for attention; many small shadows read as clutter and blur what is on top.',
    basis: ['ads:/foundations/elevation#20', 'ads:/foundations/elevation#21'],
  },
]);
