import gulp from 'gulp';
import webpackConst from 'webpack';
import gutil from 'gulp-util';

const webpack = (cb) => {
    const config = require('./webpack.config');
    config.entry.app = './app/app.component.js';

    webpackConst(config, (err, stats) => {
        if(err)  {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
};

export {webpack};
export default webpack;
