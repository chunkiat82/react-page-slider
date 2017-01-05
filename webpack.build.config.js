var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./modules/index.js",
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: "index.min.js",
        library: true,
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    },
    externals: {
        // Use external version of React
        "react": "react"
    },
    plugins: [        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};