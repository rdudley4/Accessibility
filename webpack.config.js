const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const version = process.env.npm_package_version;

const webpackConfig = {
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@fortawesome/fontawesome-free-brands$': '@fortawesome/fontawesome-free-brands/shakable.js',
      '@fortawesome/fontawesome-pro-light$' : '@fortawesome/fontawesome-pro-light/shakable.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { attrs: ['img:src', 'source:src', 'link:href'] }
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        loader: "babel-loader",
        options: {
          "presets": [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }]
          ]
        }     
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
              optipng: { enabled: false },
              gifscale:  { interlaced: false },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                quality: 75,
                progressive: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
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
