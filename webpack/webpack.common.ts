// @ts-ignore
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import {
	cssLoaderOptions,
	distPath,
	env,
	extensions,
	extractCssChunksOptions,
	lessLoaderOptions,
	publicPath,
	tsconfig,
  tsLoaderOptions
} from './constants';

const config: webpack.Configuration = {
	entry: ['normalize.css/normalize.css', path.resolve(__dirname, '../src/index.tsx')],
	mode: env.NODE_ENV,
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: tsLoaderOptions,
				test: /\.(tsx|ts)$/
			},
			{
				test: /\.less$/,
				use: [
					{ loader: ExtractCssChunks.loader },
					{
						loader: 'css-loader',
						options: cssLoaderOptions
					},
					{
						loader: 'less-loader',
						options: lessLoaderOptions
					}
				]
			},
			{
				test: /\.css$/,
				use: [
          { loader: ExtractCssChunks.loader },
					{ loader: 'css-loader', options: cssLoaderOptions }
				]
			},
			{
				test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: path.resolve(__dirname, '../static/assets') }
					}
				]
			}
		]
	},
	output: {
		path: distPath,
		publicPath
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
			template: path.resolve(__dirname, '../public/index.html')
		}),
		new ExtractCssChunks(extractCssChunksOptions)
	],
	resolve: {
		extensions,
		plugins: [
			new TsconfigPathsPlugin({
				configFile: tsconfig,
				extensions
			})
		]
	}
};

export default config;
