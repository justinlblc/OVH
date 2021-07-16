module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://backend.master-7rqtwti-zeguxhectgcvy.ovhcloud-fr-1.webpaas.ovh.net",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline"
  ],
};
