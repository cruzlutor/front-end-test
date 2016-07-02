/* jslint node: true */

'use strict';

var gulp        = require('gulp');
var bs          = require('browser-sync').get('server');

gulp.task('server', function() {
    bs.init({
        server: {
            baseDir: "./src/",
        }
    });

    gulp.watch(['./src/css/**/*', '!./src/css/main.css'], ['sass']);
    gulp.watch("./src/js/bundle.js").on('change', bs.reload);
    gulp.watch("./src/*.html").on("change", bs.reload);
});
