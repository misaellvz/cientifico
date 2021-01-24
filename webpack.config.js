var path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");
var copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        inject: true,
        template: "./public/index.html",
        filename: "./index.html",
      }
    ),
    new copyWebpackPlugin({
      patterns: [{
        from: "./src/styles/styles.css",
        to: ""
      }],
    })
  ]
}