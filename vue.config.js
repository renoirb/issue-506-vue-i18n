const path = require('path')
module.exports = {
  /**
   * (Almost) easily edit WebPack config.
   * Not really easy. But better how it was before.
   * https://github.com/neutrinojs/webpack-chain
   */
  chainWebpack: config => {
    config.devtool('source-map')
    const aliases = config.resolve.alias
    aliases
      .set('@components', path.resolve(__dirname, 'src', 'components'))
      .set('@tests', path.resolve(__dirname, 'tests'))

    // Maybe there's a better way to switch between modes.
    const isDevelopment = process.env.NODE_ENV === 'development'
    const entry = isDevelopment ? './src/main.js' : './src/lib.js'
    config.entry = entry
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
}
