module.exports = {
  pwa: {
    name: 'Number Systems Converter',
    themeColor: 'rgb(191, 191, 191)',
    msTileColor: ' rgb(191, 191, 191)',
    mobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    start_url: '.',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
     workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  }
}