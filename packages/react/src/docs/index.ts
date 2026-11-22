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
import { popupDocs } from '../popup/popup.docs';
import { inlineDialogDocs } from '../inline-dialog/inline-dialog.docs';
import { modalDialogDocs } from '../modal-dialog/modal-dialog.docs';
import { drawerDocs } from '../drawer/drawer.docs';
import { blanketDocs } from '../blanket/blanket.docs';
import { flagDocs } from '../flag/flag.docs';
import { bannerDocs } from '../banner/banner.docs';
import { inlineMessageDocs } from '../inline-message/inline-message.docs';
import { menuDocs } from '../menu/menu.docs';
import { dropdownMenuDocs } from '../dropdown-menu/dropdown-menu.docs';
import { tabsDocs } from '../tabs/tabs.docs';
import { breadcrumbsDocs } from '../breadcrumbs/breadcrumbs.docs';
import { paginationDocs } from '../pagination/pagination.docs';
import { selectDocs } from '../select/select.docs';
import { tileDocs } from '../tile/tile.docs';
import { objectDocs } from '../object/object.docs';
import { dateLabelDocs } from '../date-label/date-label.docs';
import { imageDocs } from '../image/image.docs';
import { rangeDocs } from '../range/range.docs';
import { progressIndicatorDocs } from '../progress-indicator/progress-indicator.docs';
import { progressTrackerDocs } from '../progress-tracker/progress-tracker.docs';
import { commentDocs } from '../comment/comment.docs';
import { calendarDocs } from '../calendar/calendar.docs';
import { datetimePickerDocs } from '../datetime-picker/datetime-picker.docs';
import { spotlightDocs } from '../spotlight/spotlight.docs';
import { dynamicTableDocs } from '../dynamic-table/dynamic-table.docs';
import { agentAvatarDocs } from '../agent-avatar/agent-avatar.docs';
import { presenceCursorDocs } from '../presence-cursor/presence-cursor.docs';
import { assistButtonDocs } from '../assist-button/assist-button.docs';
import { generativeBorderDocs } from '../generative-border/generative-border.docs';
import { thinkingIndicatorDocs } from '../thinking-indicator/thinking-indicator.docs';
import { chatDocs } from '../chat/chat.docs';
import { promptInputDocs } from '../prompt-input/prompt-input.docs';
import { promptSuggestionsDocs } from '../prompt-suggestions/prompt-suggestions.docs';
import { aiDisclaimerDocs } from '../ai-disclaimer/ai-disclaimer.docs';
import { suggestionCardDocs } from '../suggestion-card/suggestion-card.docs';
import { actionPlanDocs } from '../action-plan/action-plan.docs';
import { agentCardDocs } from '../agent-card/agent-card.docs';
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
  popup: popupDocs,
  "inline-dialog": inlineDialogDocs,
  "modal-dialog": modalDialogDocs,
  drawer: drawerDocs,
  blanket: blanketDocs,
  flag: flagDocs,
  banner: bannerDocs,
  "inline-message": inlineMessageDocs,
  menu: menuDocs,
  "dropdown-menu": dropdownMenuDocs,
  tabs: tabsDocs,
  breadcrumbs: breadcrumbsDocs,
  pagination: paginationDocs,
  select: selectDocs,
  tile: tileDocs,
  object: objectDocs,
  "date-label": dateLabelDocs,
  image: imageDocs,
  range: rangeDocs,
  "progress-indicator": progressIndicatorDocs,
  "progress-tracker": progressTrackerDocs,
  comment: commentDocs,
  calendar: calendarDocs,
  "datetime-picker": datetimePickerDocs,
  spotlight: spotlightDocs,
  "dynamic-table": dynamicTableDocs,
  "agent-avatar": agentAvatarDocs,
  "presence-cursor": presenceCursorDocs,
  "assist-button": assistButtonDocs,
  "generative-border": generativeBorderDocs,
  "thinking-indicator": thinkingIndicatorDocs,
  chat: chatDocs,
  "prompt-input": promptInputDocs,
  "prompt-suggestions": promptSuggestionsDocs,
  "ai-disclaimer": aiDisclaimerDocs,
  "suggestion-card": suggestionCardDocs,
  "action-plan": actionPlanDocs,
  "agent-card": agentCardDocs,
};
