/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "High Rock",
    description: "This is the highrock capital webstite.",
    author: "High Rock Capital Management",
    twitterUsername: "https://twitter.com/highrockcapital?lang=en",
    image: `${__dirname}/src/assets/logo.png`,
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#e5901a',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`teams`, `services`, `blogs`, `histories`, `about-faqs`, `differences`, `what-we-dos`, `private-client-faqs`],
        singleTypes: [`herobanner-home`, `about`, `intro-team`, `intro-service`, `intro-about`],
      },
    },
  ],
}
