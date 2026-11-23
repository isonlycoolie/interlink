// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { Lozenge } from '@interlink/react/lozenge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';

export interface NavNode {
  type: 'page' | 'folder' | 'separator';
  name: ReactNode;
  url?: string;
  index?: { url: string };
  children?: NavNode[];
}
const STATUS_LABEL: Record<string, { text: string; appearance: 'warning' | 'information' | 'discovery' | 'neutral' }> = {
  caution: { text: 'Caution', appearance: 'warning' },
  beta: { text: 'Beta', appearance: 'information' },
  'early-access': { text: 'Early access', appearance: 'discovery' },
  deprecated: { text: 'Deprecated', appearance: 'neutral' },
};

/** True when `path` is this url, or one of the url's tab pages (components/<name>/code and /usage). */
const matches = (url: string | undefined, path: string) => !!url && (url === path || (url.startsWith('/components/') && path.startsWith(`${url}/`)));

const contains = (node: NavNode, path: string): boolean =>
  matches(node.url, path) || matches(node.index?.url, path) || (node.children ?? []).some((c) => contains(c, path));

function Item({ node, path, status, depth }: { node: NavNode; path: string; status: Record<string, string>; depth: number }) {
  if (node.type === 'separator') return <li className="site-nav-group" style={{ ['--depth' as string]: depth }}>{node.name}</li>;
  const only = node.type === 'folder' ? lone(node) : undefined;
  if (only) return <Item node={{ type: 'page', name: node.name, url: only }} path={path} status={status} depth={depth} />;
  const url = node.type === 'folder' ? node.index?.url : node.url;
  const active = matches(url, path);
  const badge = url && status[url] ? STATUS_LABEL[status[url]] : undefined;
  const label = (
    <>
      <span className="site-nav-label">{node.name}</span>
      {badge ? <Lozenge appearance={badge.appearance}>{badge.text}</Lozenge> : null}
    </>
  );
  const link = url ? (
    <Link href={url} className="site-nav-link il-focusable il-focusable-inset" aria-current={active ? 'page' : undefined} data-active={active || undefined}>
      {label}
    </Link>
  ) : (
    <span className="site-nav-link">{label}</span>
  );
  const kids = (node.children ?? []).filter((c) => !(c.type === 'page' && c.url === url));
  if (node.type !== 'folder' || kids.length === 0) return <li style={{ ['--depth' as string]: depth }}>{link}</li>;
  return <Folder node={node} url={url} path={path} status={status} depth={depth} link={link} />;
}

/** A folder whose only entry is one page is just that page: no parent, no chevron. */
function lone(node: NavNode): string | undefined {
  const own = node.index?.url;
  const kids = (node.children ?? []).filter((c) => !(c.type === 'page' && c.url === own));
  if (kids.length === 0) return own;
  if (kids.length === 1 && kids[0]?.type === 'page' && !own) return kids[0].url;
  return undefined;
}

function Folder({ node, url, path, status, depth, link }: { node: NavNode; url?: string; path: string; status: Record<string, string>; depth: number; link: ReactNode }) {
  const [open, setOpen] = useState(() => contains(node, path));
  const id = `nav-${String(url ?? node.name).replace(/[^a-z0-9]+/gi, '-')}`;
  return (
    <li style={{ ['--depth' as string]: depth }}>
      <div className="site-nav-row">
        <button type="button" className="site-nav-toggle il-focusable" aria-expanded={open} aria-controls={id} aria-label={`${open ? 'Collapse' : 'Expand'} ${String(node.name)}`} onClick={() => setOpen(!open)}>
          <ChevronRightIcon label="" size="small" />
        </button>
        {link}
      </div>
      {open ? (
        <ul className="site-nav-list" id={id}>
          {(node.children ?? []).filter((c) => !(c.type === 'page' && c.url === url)).map((c, i) => (
            <Item key={i} node={c} path={path} status={status} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/** Left navigation tree with section groups, the current page highlighted and status labels. */
export function SideNav({ tree, status }: { tree: NavNode[]; status: Record<string, string> }) {
  const path = usePathname().replace(/(\.html|\/index)?\/?$/, '') || '/';
  return (
    <nav className="site-nav" aria-label="Documentation">
      <ul className="site-nav-list">
        {tree.map((n, i) => (
          <Item key={i} node={n} path={path} status={status} depth={0} />
        ))}
      </ul>
    </nav>
  );
}
