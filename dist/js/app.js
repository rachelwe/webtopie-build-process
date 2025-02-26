(function () {
  'use strict';

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
   function _select (selector, parent) {
    return (document).querySelector(selector);
  }

  const theFirstParagraph = _select('p');
  console.log('This is the first paragraph :', theFirstParagraph);

})();
