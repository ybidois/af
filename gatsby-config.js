require(`dotenv`).config();

let mentions = (module.exports = {
  siteMetadata: {
    title: `Amour Food`,
    description: `Oublies tout ce que tu sais des courses en ligne.`,
    siteUrl: process.env.SITE_URL || `https://www.amourfood.fr`,
    logo: `logo.png`,
    copyright: `© Amour Food. All rights reserved.`,
    headerLinks: [
      {
        title: `Sweet Home`,
        path: `/`,
      },
      {
        title: `Notre histoire`,
        path: `/about`,
      },
      {
        title: `Nous rejoindre`,
        path: `/join`,
      },
      {
        title: `Se connecter`,
        path: `/connect`,
      },
    ],
    footerLinks: [
      {
        title: `Notre histoire`,
        path: `/about`,
      },
      {
        title: `Nous rejoindre`,
        path: `/join`,
      },
    ],
  },
  plugins: [
    `gatsby-theme-flex`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "bzy7slf",
        },
      },
    },
  ],
});
