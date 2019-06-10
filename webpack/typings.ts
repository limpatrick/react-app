import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

export interface ENV {
  NODE_ENV: webpack.Configuration['mode'];
  HOST: webpackDevServer.Configuration['host'];
  PORT: webpackDevServer.Configuration['port'];
}
