module.exports = {
  siteMetadata: {
    title: "Restaurant Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "-du5Wo0_EZEB-6kKC-_u7ZelpYQlNNCAm1uv5TJ-ypA",
        spaceId: "261507axkas5",
      },
    },
    "gatsby-plugin-sass",
  ],
};
