module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://0.0.0.0:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`],
      },
    },
  ],
};
