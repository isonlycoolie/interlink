// SPDX-License-Identifier: Apache-2.0
import { buttonDocs } from '../button/button.docs';
import { lozengeDocs } from '../lozenge/lozenge.docs';
import { sectionMessageDocs } from '../section-message/section-message.docs';
import { spinnerDocs } from '../spinner/spinner.docs';
import { textfieldDocs } from '../textfield/textfield.docs';
import { textareaDocs } from '../textarea/textarea.docs';
import { checkboxDocs } from '../checkbox/checkbox.docs';
import { radioDocs } from '../radio/radio.docs';
import { toggleDocs } from '../toggle/toggle.docs';
import { formDocs } from '../form/form.docs';
import { badgeDocs } from '../badge/badge.docs';
import { tagDocs } from '../tag/tag.docs';
import { avatarDocs } from '../avatar/avatar.docs';
import { linkDocs } from '../link/link.docs';
import { tooltipDocs } from '../tooltip/tooltip.docs';
import { skeletonDocs } from '../skeleton/skeleton.docs';
import { progressBarDocs } from '../progress-bar/progress-bar.docs';
import { emptyStateDocs } from '../empty-state/empty-state.docs';
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
  textfield: textfieldDocs,
  textarea: textareaDocs,
  checkbox: checkboxDocs,
  radio: radioDocs,
  toggle: toggleDocs,
  form: formDocs,
  badge: badgeDocs,
  tag: tagDocs,
  avatar: avatarDocs,
  link: linkDocs,
  tooltip: tooltipDocs,
  skeleton: skeletonDocs,
  "progress-bar": progressBarDocs,
  "empty-state": emptyStateDocs,
};
