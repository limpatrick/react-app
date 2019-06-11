import dotenv from 'dotenv';
import fs from 'fs';
import lessToJs from 'less-vars-to-js';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const DEV_ENV = process.env.NODE_ENV === 'development';

export const extensions = ['.js', '.ts', '.tsx'];
export const distPath = path.resolve(__dirname, '../dist');
export const publicPath = '/';
export const tsconfig = path.resolve(__dirname, '../tsconfig.json');
export const tsLoaderOptions = {
	configFile: tsconfig,
	compilerOptions: { sourceMap: DEV_ENV }
};
export const extractCssChunksOptions = {
	chunkFilename: 'static/css/[name].[id].[chunkhash:8].chunk.css',
	filename: 'static/css/[name].[chunkhash:8].bundled.css',
	hot: DEV_ENV
};
export const cssLoaderOptions = { modules: false, sourceMap: DEV_ENV };
export const lessLoaderOptions = {
	javascriptEnabled: true,
	modifyVars: lessToJs(fs.readFileSync(path.resolve(__dirname, '../src/theme.less'), 'utf8')),
	sourceMap: DEV_ENV
};
