module.exports = {
  siteMetadata: {
    title: `Rocket Replays`,
    description: `Relive the magic of tournaments from the past`,
    author: `Tiny Cheeks`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/teams`,
      },
     
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCOLG0zJ6cs_yv18En7HDYPg'],
        apiKey: 'AIzaSyDCBnlZrRco_s4Ej_aZEjr0hhvnXkxgCgU',
        maxVideos: 50 // Defaults to 50
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Website`,
        short_name: `Mine`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
