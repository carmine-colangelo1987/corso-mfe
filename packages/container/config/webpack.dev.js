const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
      new ModuleFederationPlugin({
        name: 'containerModule', // per l'host è facoltativo il "name"
        remotes: {
          marketing: 'marketingModule@http://localhost:8081/remoteEntry.js',
        },
        shared: packageJson.dependencies,
      }),
  ],
};

module.exports = merge(commonConfig, devConfig);
