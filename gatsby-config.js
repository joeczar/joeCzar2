module.exports = {
  siteMetadata: {
    title: `JoeCzar - Developer`,
    author: {
      name: `Joe Czarnecki`,
      summary: `An autodidact because I have to be. Currently a Web Developer living in Berlin. Formerly, Digital Education Program Developer for Save the Children Germany, a Media Educator, an English Teacher, and a Musician.`,
    },
    description: `Contact and Portfolio site.`,
    siteUrl: `https://joeczar.com/`,
    social: {
      twitter: `https://twitter.com/RollerDev`,
      github: `https://github.com/joeczar`,
      linkedIn: `https://www.linkedin.com/in/joe-czarnecki-berlin/`,
    },
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
        name: `static`,
        path: `${__dirname}/src/static`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
