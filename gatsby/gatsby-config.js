module.exports = {
  siteMetadata: {
    siteUrl: "https://www.master-7rqtwti-zeguxhectgcvy.ovhcloud-fr-1.webpaas.ovh.net/",
    title: "Deal Ex Machina",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
  ],
};
