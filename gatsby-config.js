module.exports = {
  siteMetadata: {
    title: "Restaurant Gatsby",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "menu",
        link: "/menu",
      },
      {
        name: "eventi",
        link: "/events",
      },
    ],
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
    `gatsby-plugin-react-helmet`,
  ],
};
