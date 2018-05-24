/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreatePage = ({ page, store, boundActionCreators }, { prefixes }) => {
  const { createPage } = boundActionCreators;

  // Intercept the project.js component and make it match anything at /work/:project
  if (page.path.match(/^\/project/)) {
    // page.matchPath is a special key that's used for matching pages only on the client
    page.matchPath = "/work/:project";
    page.component = path.resolve("./src/pages/project.js");
    createPage(page);
  }
};
