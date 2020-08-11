const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "src/index.js",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: [".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./assets/index.html",
            chunks: ["index"],
            scriptLoading: "defer",
        }),
        new MiniCssExtractPlugin({}),
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 5000,
        open: true,
    },
};
