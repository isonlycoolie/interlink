// SPDX-License-Identifier: Apache-2.0
/** The canvas ruler under the header, the same on every page, as on a design canvas. */
export function Ruler() {
  return (
    <div className="canvas-ruler" aria-hidden="true">
      {Array.from({ length: 21 }, (_, i) => (
        <span key={i}>{i * 100}</span>
      ))}
    </div>
  );
}
