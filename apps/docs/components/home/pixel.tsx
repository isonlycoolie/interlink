// SPDX-License-Identifier: Apache-2.0
/** A 5×7 block alphabet, drawn as SVG so the wordmark needs no extra font. Rows top to bottom, 1 = filled. */
const G: Record<string, string[]> = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  N: ['10001', '11001', '10101', '10101', '10011', '10001', '10001'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  "'": ['00100', '00100', '00000', '00000', '00000', '00000', '00000'],
  ' ': ['000', '000', '000', '000', '000', '000', '000'],
};

/** A word set in the block alphabet. It scales with font size and carries the word for assistive tech. */
export function PixelWord({ text, className }: { text: string; className?: string }) {
  let x = 0;
  const cells: [number, number][] = [];
  for (const ch of text.toUpperCase()) {
    const g = G[ch] ?? G[' ']!;
    g.forEach((row, y) => [...row].forEach((c, i) => c === '1' && cells.push([x + i, y])));
    x += (g[0]?.length ?? 3) + 1;
  }
  const w = x - 1;
  return (
    <svg className={`home-pixel ${className ?? ''}`} viewBox={`-0.2 -0.2 ${w + 0.4} 7.4`} role="img" aria-label={text} style={{ aspectRatio: `${w} / 7` }}>
      {cells.map(([cx, cy]) => (
        <rect key={`${cx}-${cy}`} x={cx - 0.17} y={cy - 0.17} width="1.34" height="1.34" rx="0.34" />
      ))}
    </svg>
  );
}
