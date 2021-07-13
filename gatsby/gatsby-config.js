module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `gatsby`,
  },
  plugins: [`gatsby-plugin-gatsby-cloud`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./src/images`,
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `http://localhost:1337`,
      queryLimit: 1000,
      contentTypes: [
        `article`,
        `category`,
      ],  
    },
  },
 
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-playground`,
],
};
