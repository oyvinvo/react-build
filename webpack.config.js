var webpack = require('webpack');
var path = require ('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    context: path.resolve(__dirname),

    entry: [
        './src/Main.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
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
        ],
        noParse: [pathToReact]
    }
};