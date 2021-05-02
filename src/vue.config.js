module.exports = {
  pwa: {
    name: 'Number Systems Converter',
    themeColor: '#bfbfbf',
    msTileColor: '#bfbfbf',
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