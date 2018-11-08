const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env_mode = process.env.NODE_ENV !== "production";

module.exports = {
    // mode
    mode: "development",
    // target
    target: "web",
    // entry
    entry: ["@babel/polyfill", "./src/index.js"],
    // output
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    // alias
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, "./assets"),
            '@actions' : path.resolve(__dirname, "./src/actions"),
            '@components': path.resolve(__dirname, "./src/components"),
            '@containers': path.resolve(__dirname, "./src/containers"),
            '@reusable': path.resolve(__dirname, "./src/reusable"),
            '@utils': path.resolve(__dirname, "./src/utils")
        }
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader"
                },
                //empeche babel de transformer les fichiers dans node_modules
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(css|less)$/,
                use: [
                    env_mode ? "style-loader": MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                exclude: [/[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [ {
                    loader: "file-loader",
                    options: {
                        outputPath: "assets/",
                        name: "[name][hash].[ext]"
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }

        ]
    },
    // dev-server 
    devServer: {
        hot: true,
        // contentBase: path.resolve("./dist/"),
        historyApiFallback: true,
        publicPath: "/",
        // open: "Chrome"
    },
    // optimization
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux|react-router-dom|redux-form|redux-saga|prop-types|semantic-ui-react|semantic-react|redux-promise)[\\/]/,
              name: 'vendor',
              chunks: 'all',
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },
      // plugins
      plugins: [
          new HtmlWebpackPlugin({
              title: "djumper",
              filename: "index.html",
              template: "./index.html"
          }),
          new MiniCssExtractPlugin({filename: "style.css"})
      ]

}

// publicPath allows you to specify the base path for all the assets within your application. 
// historyAPIFallback will redirect 404s to /index.html
// contentBase est use pour servir les files statics
// use style loader en dev pour profiter du HMR