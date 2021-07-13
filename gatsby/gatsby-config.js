module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: "https://backend.master-7rqtwti-zeguxhectgcvy.ovhcloud-fr-1.webpaas.ovh.net",
      contentTypes: [
        "article",
        "category",
      ],
      queryLimit: 1000,
    },
  },
 
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },
  "gatsby-plugin-offline",
  `gatsby-plugin-playground`,
],

};

