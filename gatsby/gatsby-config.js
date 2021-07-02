module.exports = {
  siteMetadata: {
    title: "Deal Ex Machina",
    description: "Deal Ex Machina Website",
    author: "Deal Ex Machina",
  },
  plugins: ["gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://www.backend.{default}/`,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`article`, `user`, `category`],
    },
  },
],
};
