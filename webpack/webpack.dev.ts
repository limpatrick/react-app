import { toNumber } from 'lodash';
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import merge from 'webpack-merge';
import { publicPath } from './constants';
import common from './webpack.common';

const config: webpack.Configuration = {
	devServer: {
		compress: true,
		contentBase: path.resolve(__dirname, '../public'),
		disableHostCheck: false,
		historyApiFallback: { disableDotRule: true },
		host: process.env.HOST,
		hot: true,
		https: false,
		inline: true,
		overlay: true,
		port: toNumber(process.env.PORT),
		public: 'localhost',
		publicPath,
		watchContentBase: true
	},
	devtool: 'source-map',
	module: {
		rules: [{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }]
	},
	output: {
		chunkFilename: 'static/js/[name].[id].chunk.js',
		devtoolModuleFilenameTemplate: info =>
			path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
		filename: 'static/js/[name].bundled.js',
		pathinfo: true
	}
};

export default merge(common, config);
