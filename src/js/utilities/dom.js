/**
 * Helper fonction for querySelector()
 * @source https://gomakethings.com/an-easier-way-to-get-elements-in-the-dom-with-vanilla-js/
 * @param {string} selector - String query to look for
 * @param {node} [parent=document] - Optional parent of the query
 * @returns {node} DOM Element queried
 * @example
 *   const nodeParent = _select('.my-element');
 *   const node = _select('.my-child-element', nodeParent);
 */
 export function _select (selector, parent) {
  return (parent ? parent : document).querySelector(selector);
}

/**
 * Helper fonction for querySelectorAll()
 * @source https://gomakethings.com/an-easier-way-to-get-elements-in-the-dom-with-vanilla-js/
 * @param {string} selector - String query to look for
 * @param {node} [parent=document] - Optional parent of the query
 * @returns {node[]} Array of DOM Elements queried
 */
export function _selectAll (selector, parent) {
  return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};