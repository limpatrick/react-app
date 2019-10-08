import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = {
	optimization: {
		minimizer: [new UglifyJsPlugin({ parallel: true }), new OptimizeCSSAssetsPlugin()],
		splitChunks: {
			chunks: 'all'
		}
	},
	output: {
		chunkFilename: 'static/js/[name].[id].[chunkhash:8].chunk.js',
		filename: 'static/js/[name].[chunkhash:8].bundled.js',
		devtoolModuleFilenameTemplate: info =>
			path
				.relative(path.resolve(__dirname, '../src'), info.absoluteResourcePath)
				.replace(/\\/g, '/')
	},
	plugins: [
		new CleanWebpackPlugin({
			verbose: true
		}) as any
	]
};

export default merge(common, config);
