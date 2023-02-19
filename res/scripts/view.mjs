/**
 * J-Card Template: View
 *
 * Functions that modify the view.
 */

import { getAccordions } from "./application-functions.mjs";

/** Closes collapsible fieldsets. */
export function collapseAll() {
  return getAccordions().forEach((accordion) => {
    accordion.element.open = false;
  });
}

/** Opens collapsible fieldsets. */
export function expandAll() {
  return getAccordions().forEach((accordion) => {
    accordion.element.open = true;
  });
}
