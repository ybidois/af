const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ybidois/AmourFood/af/.cache/dev-404-page.js"))),
  "component---node-modules-arshad-gatsby-theme-page-core-src-templates-page-query-js": hot(preferDefault(require("/Users/ybidois/AmourFood/af/node_modules/@arshad/gatsby-theme-page-core/src/templates/page-query.js")))
}

