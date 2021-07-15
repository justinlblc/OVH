module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
{
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: process.env.API_URL,
      collectionTypes: ["article"],
      queryLimit: 1000,
    },
  },
],
};
