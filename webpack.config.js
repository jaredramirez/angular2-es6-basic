module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'angular2']
              }
            },
            {
              test: /\.html$/,
              loader: 'raw'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
