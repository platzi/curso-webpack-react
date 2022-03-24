const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**@type {import('webpack').Configuration} */
module.exports = {
	entry: "./src/index.js",
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js'
	},
	resolve: {
    extensions: ['.js', '.jsx']
  },
	module:{
		rules:[
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
     })],
}