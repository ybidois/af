var plugins = [{
      plugin: require('/Users/ybidois/AmourFood/af/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"linkImagesToOriginal":false,"quality":100,"withWebp":true}}],"remarkPlugins":[null]},
    },{
      plugin: require('/Users/ybidois/AmourFood/af/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ybidois/AmourFood/af/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ybidois/AmourFood/af/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"icon":"assets/images/favicon.png","start_url":"/","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"7e796545879a2a30100b0593a0ffc085"},
    },{
      plugin: require('/Users/ybidois/AmourFood/af/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"234189317","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"amourfood.fr"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
