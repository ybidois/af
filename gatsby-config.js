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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-167906592-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "amourfood.fr",
      },
    },
  ],
});
