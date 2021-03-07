module.exports = {
  siteMetadata: {
    title: "Restaurant Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "11",
        spaceId: "1111",
      },
    },
    "gatsby-plugin-sass",
  ],
};
