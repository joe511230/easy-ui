const Webpack = require('webpack')
const Path = require('path')

module.exports = {
	entry: {
		main: [Path.resolve(__dirname, 'main.js'), 'webpack-dev-server/client?http://localhost:8081']
	},
	output: {
		path: Path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		alias: {
			layouts: Path.resolve(__dirname, 'layouts'),
			components: Path.resolve(__dirname, 'components'),
			interactive: Path.resolve(__dirname, 'interactive'),
			'vue$': 'vue/dist/vue.esm.js',
			src: Path.resolve(__dirname, './src'),
		}
	},
	devServer: {
		publicPath: "/",
		contentBase: [Path.join(__dirname, "dist")],
		hot: true,
		port: 8081
	}
}