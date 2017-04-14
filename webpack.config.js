const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const version = process.env.npm_package_version;

const webpackConfig = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          attrs: ['img:src', 'source:src']
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|gif|svg|png)$/i,
        use: [
          {
            loader: "file-loader",
            query: {
              name: '[path]img-[sha512:hash:base64:7].[ext]',
              context: './src'
            }
          },
          {
            loader: "image-webpack-loader",
            query: {
              progressive: true,
              optipng: {
                optimizationLevel: 7
              },
              gifscale: {
                interlaced: false
              },
              mozjpeg: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(webm|mp4)$/i,
        loader: "file-loader",
        options: {
          name: '[path]video-[sha512:hash:base64:7].[ext]',
          context: './src'
        }
      }
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
    new HtmlWebpackPlugin({
      filename: 'tours.html',
      template: 'src/pages/tours.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'survey.html',
      template: 'src/pages/survey.html'
    }),
		new ExtractTextPlugin('application.css')
	]
};

module.exports = webpackConfig;
