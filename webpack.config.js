const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')

/**@type {import('webpack').Configuration} */
module.exports = {
	entry: "./src/index.js",
	mode:"production",
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
		publicPath: '/'
	},
	resolve: {
    	extensions: ['.js', '.jsx'],
		alias:{
			"@": path.resolve(__dirname, 'src')
		}
  	},
	module:{
		rules:[
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader'
			]
			},
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use:{
				loader: 'babel-loader',
				options: {
					presets: [
                        '@babel/preset-env',
                        ["@babel/preset-react",
                            {
                                "runtime": "automatic"
                            }
                        ]
                    ]
				}
			}
		}
		]
	},
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html"),
     }),
	 new MiniCssExtractPlugin({
		 filename: "[name].[contenthash].css",
	 })],
	 optimization: {
		minimize: true,
		minimizer: [
			new CSSMinimizerPlugin(),
			'...'
		  ]
	}
}