module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DealExMachina Website",
    desciption: "Official DealExMachina website where you will see many articles covering a large range of subjects."
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/account/*`] },
  },],
};
