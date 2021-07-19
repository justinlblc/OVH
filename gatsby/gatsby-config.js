module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://backend.master-7rqtwti-zeguxhectgcvy.ovhcloud-fr-1.webpaas.ovh.net",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`, `category`],
        singleTypes: [`home`],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline"
  ],
};
