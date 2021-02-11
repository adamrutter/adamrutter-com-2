module.exports = {
  siteMetadata: {
    siteUrl: `https://adamrutter.com`,
    title: `adamrutter.com`,
    description: `I'm Adam, a freelance front-end web developer/designer based in Chichester, West Sussex.`,
    author: `Adam Rutter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/markdown/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adamrutter.com`,
        short_name: `adamrutter.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#374ecd`,
        display: `minimal-ui`,
        icon: `src/svg/favicon.svg`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Barlow:700,900", "Titillium Web:400,400i,700"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: process.env.GOATCOUNTER_CODE,
      },
    },
  ],
}
