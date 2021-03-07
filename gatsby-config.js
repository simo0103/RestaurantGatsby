module.exports = {
  siteMetadata: {
    title: "Restaurant Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "K2JcP14LCi3vI5SSyd76dHJDe7iuJuzx_fty1BIvpgk",
        spaceId: "bwtiygax3epu",
      },
    },
    "gatsby-plugin-sass",
  ],
};
