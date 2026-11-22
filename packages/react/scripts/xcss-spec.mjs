// SPDX-License-Identifier: Apache-2.0
// Which CSS properties xcss accepts, and which token group each one requires.
// 'raw' means a plain CSS value is allowed (layout, sizing, behaviour).
import { RAW_PROPERTIES } from './xcss-raw-properties.mjs';

export const BREAKPOINTS = { xs: '30rem', sm: '48rem', md: '64rem', lg: '90rem', xl: '110.5rem' };
export const PSEUDOS = ['hover', 'active', 'focus', 'focus-visible', 'focus-within', 'disabled'];

const color = 'color';
const space = 'space';
const spaceSigned = 'spaceSigned';


/** property (camelCase) -> [value kind, supports pseudo states] */
export const PROPERTIES = {
  color: [color, true],
  backgroundColor: ['background', true],
  borderColor: [color, true],
  borderBlockColor: [color, true],
  borderInlineColor: [color, true],
  borderBlockStartColor: [color, true],
  borderBlockEndColor: [color, true],
  borderInlineStartColor: [color, true],
  borderInlineEndColor: [color, true],
  outlineColor: [color, true],
  fill: [color, true],
  stroke: [color, true],
  textDecorationColor: [color, true],
  padding: [space, false],
  paddingBlock: [space, false],
  paddingBlockStart: [space, false],
  paddingBlockEnd: [space, false],
  paddingInline: [space, false],
  paddingInlineStart: [space, false],
  paddingInlineEnd: [space, false],
  margin: [spaceSigned, false],
  marginBlock: [spaceSigned, false],
  marginBlockStart: [spaceSigned, false],
  marginBlockEnd: [spaceSigned, false],
  marginInline: [spaceSigned, false],
  marginInlineStart: [spaceSigned, false],
  marginInlineEnd: [spaceSigned, false],
  gap: [space, false],
  rowGap: [space, false],
  columnGap: [space, false],
  inset: [spaceSigned, false],
  insetBlockStart: [spaceSigned, false],
  insetBlockEnd: [spaceSigned, false],
  insetInlineStart: [spaceSigned, false],
  insetInlineEnd: [spaceSigned, false],
  borderRadius: ['radius', false],
  borderStartStartRadius: ['radius', false],
  borderStartEndRadius: ['radius', false],
  borderEndStartRadius: ['radius', false],
  borderEndEndRadius: ['radius', false],
  borderWidth: ['borderWidth', false],
  borderBlockWidth: ['borderWidth', false],
  borderInlineWidth: ['borderWidth', false],
  borderBlockStartWidth: ['borderWidth', false],
  borderBlockEndWidth: ['borderWidth', false],
  borderInlineStartWidth: ['borderWidth', false],
  borderInlineEndWidth: ['borderWidth', false],
  outlineWidth: ['borderWidth', true],
  boxShadow: ['shadow', true],
  font: ['font', false],
  fontWeight: ['fontWeight', false],
  fontFamily: ['fontFamily', false],
  opacity: ['opacity', true],
  ...RAW_PROPERTIES,
};

/** Token name prefixes allowed for each value kind. */
export const KIND_PREFIXES = {
  color: ['color.'],
  background: ['color.background.', 'color.blanket', 'color.skeleton', 'color.interaction.', 'elevation.surface', 'utility.elevation.surface'],
  space: ['space.'],
  spaceSigned: ['space.'],
  radius: ['radius.'],
  borderWidth: ['border.width'],
  shadow: ['elevation.shadow.'],
  font: ['font.heading.', 'font.body', 'font.code', 'font.metric.'],
  fontWeight: ['font.weight.'],
  fontFamily: ['font.family.'],
  opacity: ['opacity.'],
};

export const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
