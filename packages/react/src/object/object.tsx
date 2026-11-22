// SPDX-License-Identifier: Apache-2.0
import { Tile, type TileSize } from '../tile/tile';
import { OBJECTS, objectLabel, type ObjectType } from './object-types';

export type { ObjectHue, ObjectType } from './object-types';

export interface ObjectIconProps {
  /** The kind of thing, such as page, task or bug. Its glyph and color come with it. */
  type: ObjectType;
  /** 12px inline or 16px; for anything larger use ObjectTile. */
  size?: 'small' | 'medium';
  /** Accessible name; defaults to the type. Use an empty string when text beside it names the object. */
  label?: string;
  testId?: string;
}

/** The glyph that says what kind of thing an item is, in its assigned color. */
export function ObjectIcon({ type, size = 'medium', label, testId }: ObjectIconProps) {
  const [Icon, hue] = OBJECTS[type];
  return (
    <span className="il-object" data-size={size} data-testid={testId}>
      <Icon label={label ?? objectLabel(type)} color={`color.icon.accent.${hue}`} size={size} />
    </span>
  );
}

export interface ObjectTileProps {
  type: ObjectType;
  /** 20px to 48px. */
  size?: Exclude<TileSize, 'xxsmall'>;
  /** Bold tiles fill with the accent and invert the glyph, for emphasis. */
  isBold?: boolean;
  label?: string;
  testId?: string;
}

/** An object on a tile, for sizes above 16px, such as list rows and headers. */
export function ObjectTile({ type, size = 'medium', isBold = false, label, testId }: ObjectTileProps) {
  const [Icon, hue] = OBJECTS[type];
  return (
    <Tile label={label ?? objectLabel(type)} size={size} backgroundColor={`color.background.accent.${hue}.${isBold ? 'bolder' : 'subtler'}`} testId={testId}>
      <Icon label="" color={isBold ? 'color.icon.inverse' : `color.icon.accent.${hue}`} shouldScale />
    </Tile>
  );
}
