// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import CrossCircleIcon from '@interlink/icons/core/cross-circle';
import { Spinner } from '../spinner/spinner';

/** Loading spinner, clear button and chevron at the end of a Select control. */
export function SelectIndicators({ isLoading, canClear, onClear }: { isLoading: boolean; canClear: boolean; onClear: () => void }) {
  return (
    <div className="il-select-indicators">
      {isLoading ? <Spinner size="small" label="Loading" /> : null}
      {canClear ? (
        <button type="button" className="il-select-clear" aria-label="Clear" tabIndex={-1} onClick={onClear}>
          <CrossCircleIcon label="" color="color.icon.subtle" />
        </button>
      ) : null}
      <span className="il-select-chevron" aria-hidden="true">
        <ChevronDownIcon label="" />
      </span>
    </div>
  );
}
