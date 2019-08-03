const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/javascript/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              config: { path: path.resolve(__dirname, "./postcss.config.js") }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: { loader: "html-loader" }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "src/pages/index.ejs",
      filename: "index.html"
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: ["*"]
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src", "assets", "images"),
      components: path.resolve(__dirname, "src", "styles", "components")
    }
  }
};
