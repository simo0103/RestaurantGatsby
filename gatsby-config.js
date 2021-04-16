const path = require(`path`);

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
        name: "logo",
        link: "/",
      },
      {
        name: "eventi",
        link: "/events",
      },
      {
        name: "contatti",
        link: "/contacts",
      },
    ],
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: "gatsby-source-contentful",

      options: {
        accessToken: "-du5Wo0_EZEB-6kKC-_u7ZelpYQlNNCAm1uv5TJ-ypA",
        spaceId: "261507axkas5",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
  ],
};
