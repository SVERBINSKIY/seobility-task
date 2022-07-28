const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (envVars) => {
  const { env } = envVars
  console.log('ENV: ', env)
  const envConfig = require(`./webpack.${env}.js`)

  return merge(commonConfig, envConfig)
}
