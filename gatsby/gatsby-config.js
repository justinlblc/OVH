require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "DealExMachina Website",
    desciption: "Official DealExMachina website where you will see many articles covering a large range of subjects."
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.API_URL,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`article`, `category`],
    },
  },
  "gatsby-plugin-image",
],
};
