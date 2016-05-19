import gulp from 'gulp';
import webpackConst from 'webpack';
import gutil from 'gulp-util';

const webpack = (cb) => {
    webpackConst(require('./webpack.config'), (err, stats) => {
      if(err)  {
          throw new gutil.PluginError("webpack", err);
      }

      gutil.log('[webpack]', stats.toString({chunks: false}));

      cb();
    });
};

export {webpack};
export default webpack;
