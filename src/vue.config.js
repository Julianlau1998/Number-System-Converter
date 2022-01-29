module.exports = {
  pwa: {
    name: 'Number Systems Converter',
    themeColor: '#2a343c',
    msTileColor: '#1a1c1e',
    navigationColor: "#1a1c1e",
    navigationColorDark: "#1a1c1e",
    navigationDividerColor: "#1a1c1e",
    navigationDividerColorDark: "#1a1c1e",
    backgroundColor: '#1a1c1e',
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