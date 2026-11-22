// SPDX-License-Identifier: Apache-2.0

export interface PropDoc {
  /** TypeScript type as people should read it. */
  type: string;
  default?: string;
  description: string;
}

export type Category = 'Forms and input' | 'Images and icons' | 'Labels' | 'Loading' | 'Messaging' | 'Navigation' | 'Text and data display';

export interface ComponentDoc {
  name: string;
  /** Import path, e.g. @interlink/react/button. */
  package: string;
  /** Named exports documented on the page; the first is the main one. */
  exports: string[];
  description: string;
  status: 'ga' | 'beta' | 'caution';
  category: Category;
  keywords: string[];
  props: Record<string, PropDoc>;
}

/**
 * Declare docs for a component. `props` must name every prop of `P`, so a new or renamed prop that is not
 * documented fails the type check.
 */
export function docsFor<P>(doc: Omit<ComponentDoc, 'props'> & { props: Record<keyof P, PropDoc> }): ComponentDoc {
  return doc as ComponentDoc;
}
