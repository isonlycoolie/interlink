// SPDX-License-Identifier: Apache-2.0
'use client';
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import CopyIcon from '@interlink/icons/core/copy';
import { IconButton } from '@interlink/react/button';
import { Tooltip } from '@interlink/react/tooltip';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

/** Copies the code of the surrounding code frame, reading it from the rendered block so highlighting never leaks in. */
export function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async (e: MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.closest('.doc-code')?.querySelector('pre')?.textContent ?? '';
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = Object.assign(document.createElement('textarea'), { value: text });
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Tooltip content={copied ? 'Copied' : 'Copy code'} position="left">
      <IconButton appearance="subtle" spacing="compact" icon={copied ? CheckMarkIcon : CopyIcon} label={copied ? 'Copied' : 'Copy code'} onClick={copy} />
    </Tooltip>
  );
}
