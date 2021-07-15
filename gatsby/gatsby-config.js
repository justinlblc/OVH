const config = require("platformsh-config").config();

var backend_route = "";
if ( config.isValidPlatform() ) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  backend_route = `http://${config.credentials("strapi")["host"]}`
} else {
  require("dotenv").config()
  backend_route = process.env.API_URL;
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: backend_route,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`Article`],
      },
    },
  ],
};
