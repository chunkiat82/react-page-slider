var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./examples/index.jsx",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    stats: {
        // Nice colored output
        colors: true
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin()]
};
