module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"linkImagesToOriginal":false,"quality":100,"withWebp":true}}],"remarkPlugins":[null]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"assets/images/favicon.png","start_url":"/","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"7e796545879a2a30100b0593a0ffc085"},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"typekit":{"id":"bzy7slf"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"234189317","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"amourfood.fr"},
    }]
