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
  pathPrefix = "/new-site";
} else if (process.env.DEPLOY_TARGET === "gh-pages") {
  pathPrefix = "/convergencedesignlab";
}

if (pathPrefix) {
  config.pathPrefix = pathPrefix;
}

process.env.GATSBY_BASEURL = pathPrefix ? `${pathPrefix}` : "";

module.exports = config;
