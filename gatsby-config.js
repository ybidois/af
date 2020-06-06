require(`dotenv`).config();

let mentions = (module.exports = {
  siteMetadata: {
    title: `Amour Food`,
    description: `Oublies tout ce que tu sais des courses en ligne.`,
    siteUrl: process.env.SITE_URL || `https://www.amourfood.fr`,
    logo: `logo.png`,
    copyright: `© Amour Food. Tous Droits Réservés.`,
    headerLinks: [
      {
        title: `Sweet Home`,
        path: `/`,
      },
      {
        title: `Notre histoire`,
        path: `/histoire`,
      },
      {
        title: `Se connecter`,
        path: `/connection`,
      },
    ],
    footerLinks: [
      {
        title: `Sweet Home`,
        path: `/`,
      },
      {
        title: `Notre histoire`,
        path: `/histoire`,
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
