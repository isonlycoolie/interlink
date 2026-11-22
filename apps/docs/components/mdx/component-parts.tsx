// SPDX-License-Identifier: Apache-2.0
import { exampleSets } from '@interlink/guidelines/registry';
import { exampleSources } from '@interlink/guidelines/sources';
import { componentDocs } from '@interlink/react/docs';

/** Every live example for a component, each with its code. */
export function ExampleSet({ component }: { component: string }) {
  const list = exampleSets[component] ?? [];
  if (!list.length) throw new Error(`No examples for component: ${component}`);
  return (
    <>
      {list.map(({ slug, title, Component }) => (
        <section key={slug} className="doc-example-block">
          <h2 className="doc-h2" id={slug.replace(/^\d+-/, '')}>{title}</h2>
          <figure className="doc-example">
            <div className="doc-example-stage" data-padded="">
              <Component />
            </div>
            <details className="doc-example-code">
              <summary className="il-focusable">Show code</summary>
              <pre>
                <code>{exampleSources[component]?.[slug] ?? ''}</code>
              </pre>
            </details>
          </figure>
        </section>
      ))}
    </>
  );
}

/** Props of a component from its typed docs metadata. */
export function PropsTable({ component }: { component: string }) {
  const doc = componentDocs[component];
  if (!doc) throw new Error(`No docs metadata for component: ${component}`);
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
        <thead>
          <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
        </thead>
        <tbody>
          {Object.entries(doc.props).map(([name, p]) => (
            <tr key={name}>
              <td><code>{name}</code></td>
              <td><code className="doc-props-type">{p.type}</code></td>
              <td>{p.default ? <code>{p.default}</code> : '—'}</td>
              <td>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Install line and import for a component. */
export function ComponentIntro({ component }: { component: string }) {
  const doc = componentDocs[component];
  if (!doc) throw new Error(`No docs metadata for component: ${component}`);
  const pkg = doc.package.split('/').slice(0, 2).join('/');
  return (
    <div className="doc-intro">
      <pre><code>{`pnpm add ${pkg}`}</code></pre>
      <pre><code>{doc.package.includes('<name>') ? `import AddIcon from '@interlink/icons/core/add';` : `import { ${doc.exports.join(', ')} } from '${doc.package}';`}</code></pre>
    </div>
  );
}
