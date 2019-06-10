import common from './webpack.common';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import { env, publicPath } from './constants';

const config: webpack.Configuration = {
	devServer: {
		compress: true,
		contentBase: path.resolve(__dirname, '../public'),
		disableHostCheck: false,
		historyApiFallback: { disableDotRule: true },
		host: env.HOST,
		hot: true,
		https: false,
		inline: true,
		overlay: true,
		port: env.PORT,
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
