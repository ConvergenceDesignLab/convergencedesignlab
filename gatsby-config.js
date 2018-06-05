const config = {
  siteMetadata: {
    title: "Convergence Design Lab"
  },
  plugins: ["gatsby-plugin-react-next", "gatsby-plugin-sass", "gatsby-plugin-react-helmet"]
};

let pathPrefix;
if (process.env.DEPLOY_TARGET === "ftp") pathPrefix = "/new-site";
else if (process.env.DEPLOY_TARGET === "gh-pages") pathPrefix = "/convergencedesignlab";
if (pathPrefix) config.pathPrefix = pathPrefix;

module.exports = config;
