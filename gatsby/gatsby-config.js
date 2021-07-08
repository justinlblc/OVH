
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
      apiURL: "https://backend.master-7rqtwti-zeguxhectgcvy.ovhcloud-fr-1.webpaas.ovh.net",
      queryLimit: 1000,
      contentTypes: [`article`, `category `],
    },
  },
],
};
