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

const { FRONTEND_TARGET, BACKEND_TARGET } = process.env;

let apiUrl = "";
if (BACKEND_TARGET === "colum") {
  apiUrl = "http://mediaarts.colum.edu/convergencedesignlab.org/api/wp-json";
} else if (BACKEND_TARGET === "pair") {
  apiUrl = "https://api2.convergencedesignlab.org/wp/wp-json";
} else if (BACKEND_TARGET === "dev") {
  apiUrl = "http://localhost/convergencedesignlab2/wp-json";
} else {
  console.error(`Invalid back-end target: ${BACKEND_TARGET}`);
}
process.env.GATSBY_API_URL = apiUrl;

// No trailing slashes for gatsby's path prefixes
let pathPrefix = "";
if (FRONTEND_TARGET === "colum") {
  // Htaccess directs from here to front-end/ folder, so omit front-end/ from this path
  pathPrefix = "/convergencedesignlab.org";
} else if (FRONTEND_TARGET === "pair") {
  pathPrefix = "";
} else if (FRONTEND_TARGET === "dev") {
  pathPrefix = "";
} else {
  console.error(`Invalid front-end target: ${FRONTEND_TARGET}`);
}
process.env.GATSBY_BASEURL = pathPrefix;
if (pathPrefix) config.pathPrefix = pathPrefix;

module.exports = config;
