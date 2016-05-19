var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {},
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'angular2']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
