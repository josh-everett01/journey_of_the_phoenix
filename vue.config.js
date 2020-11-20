module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/journey_of_the_phoenix/'
    : '/'
}