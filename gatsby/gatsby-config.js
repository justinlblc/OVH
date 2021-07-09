module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-react-helmet",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-offline",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
  {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: backend_route,
      contentTypes: [
        // List of the Content Types you want to be able to request from Gatsby.
        "article",
        "category",
      ],
      queryLimit: 1000,
    },
  },
],
};
