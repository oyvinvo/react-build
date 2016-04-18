var webpack = require('webpack');
var path = require ('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    context: path.resolve(__dirname),

    entry: {
        javascript: "./src/Main.jsx",
        html: "./src/index.html"
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/dist")
    },

    devServer: {
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        host: process.env.PORT
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ],
        noParse: [pathToReact]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};