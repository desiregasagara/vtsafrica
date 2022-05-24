module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp",
  `gatsby-plugin-anchor-links`, "gatsby-transformer-sharp",`gatsby-plugin-modal-routing`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Victoria Travel Services`,
      short_name: `vtsafrica`,
      start_url: `/`,
      background_color: `#000`,
      theme_color: `#000`,
      display: `standalone`,
      icon: `src/images/favicon.png`
    },
  },
]
};
