const config = {
  siteMetadata: {
    title: "Convergence Design Lab"
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`
      }
    }
  ]
};

let pathPrefix;

if (process.env.DEPLOY_TARGET === "ftp") {
  // No path prefix needed here anymore
} else if (process.env.DEPLOY_TARGET === "gh-pages") {
  pathPrefix = "/convergencedesignlab";
} else {
  // This is where more deploy targets can be added, e.g. a pathPrefx of "/staging" or "/testing"
}

if (pathPrefix) {
  config.pathPrefix = pathPrefix;
}

process.env.GATSBY_BASEURL = pathPrefix ? `${pathPrefix}` : "";

module.exports = config;
