module.exports = {
  siteMetadata: {
    title: `Carmen Cadete`,
    description: `Hi, I'm a freelance graphic designer based in Germany.`,
    keywords: `Freelance Graphic Designer`,
    author: `@CarmzyParmzy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/carmen-icon.png`, // This path is relative to the root of the site.
      },
    },
    // WordPress WP-Graphql
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WPGraphQL",
        // This is the field under which it's accessible
        fieldName: "wordpressData",
        // URL to query from
        url: "https://info.carmencadete.com/graphql",
        //refetchInterval: 60,
      },
    },
    // SASS
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
