# Interlink illustration style

Every illustration follows these rules. `scripts/check-illustrations.mjs` enforces the measurable ones on every
build and test; the rest are reviewed by eye on contact sheets (`pnpm sheet <out-dir>`) in light, dark and a
recoloured palette before a piece is merged.

1. **One meaning.** Each piece says one thing, written in `src/catalog.ts` before it is drawn.
2. **Flat, pure colour.** Shapes are filled with palette roles only: no gradients, tints, opacity, filters or
   blur. Primary is the brand colour; secondary, tertiary and quaternary are purple, saffron and lime; accent is
   blue; neutral is for quiet shapes such as pages; ink gives small doses of contrast; paper makes seams.
3. **Two to four colours** per piece, plus a touch of ink or paper.
4. **Simple geometry.** Rectangles, circles, polygons and short paths. Corners use radii on a 2-unit grid.
   Overlapping shapes are separated by a paper seam (2–3 units) or an ink cut, never a hairline.
5. **Room to breathe.** Spot pieces use a 96 × 96 box and hero pieces 192 × 96. Nothing comes closer than 6 units
   to the edge.
6. **Balanced.** One focal object near the middle; the weight centre stays within 10 units of the centre of the box.
7. **Small energy.** At most three spark or motion strokes, 2.5 to 3 units wide with round caps.
8. **Dark mode for free.** Colours are CSS variables, so the dark palette applies without separate artwork. Ink
   turns mid-gray in dark mode so lines stay visible; paper stays white.

## Adding a piece

1. Add its slug, group and meaning to `src/catalog.ts`.
2. Draw `art/<slug>.svg` with placeholder colours `P S T Q A N I W` (primary, secondary, tertiary, quaternary,
   accent, neutral, ink, paper).
3. Run `pnpm test` and look at a contact sheet in both themes.
