/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreatePage = ({ page, store, boundActionCreators }, { prefixes }) => {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/project\/?$/)) {
    // Intercept page/project.js component and make it match anything at /work/:project
    // page.matchPath is a special key that's used for matching pages only on the client
    page.matchPath = "/work/:project";
    page.component = path.resolve("./src/pages/project.js");
    createPage(page);
  } else if (page.path.match(/^\/resource\/?$/)) {
    // Intercept page/resource.js component and make it match anything at /resource/:resource
    page.matchPath = "/resources/:resource";
    page.component = path.resolve("./src/pages/resource.js");
    createPage(page);
  }
};
