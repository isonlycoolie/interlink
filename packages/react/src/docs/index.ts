// SPDX-License-Identifier: Apache-2.0
import { buttonDocs } from '../button/button.docs';
import { lozengeDocs } from '../lozenge/lozenge.docs';
import { sectionMessageDocs } from '../section-message/section-message.docs';
import { spinnerDocs } from '../spinner/spinner.docs';
import { iconDocs } from './icon.docs';
import type { ComponentDoc } from './types';

export type { ComponentDoc, PropDoc, Category } from './types';

/** Docs metadata for every component, keyed by its docs slug. Also feeds the knowledge base and MCP server. */
export const componentDocs: Record<string, ComponentDoc> = {
  button: buttonDocs,
  lozenge: lozengeDocs,
  'section-message': sectionMessageDocs,
  spinner: spinnerDocs,
  icon: iconDocs,
};
