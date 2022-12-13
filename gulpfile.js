const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browserSync = require("browser-sync");



const srcPath = {
	'scss': 'sass/**/*.scss',
};


const Sass = () => {
	return gulp.src(srcPath.scss , { sourcemaps : true })
	.pipe(plumber({errorHandler : notify.onError('Error:<%= error.message %>')}))
	.pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./css/')) 
    .pipe(browserSync.stream())

}

const watchFiles = () => {
	gulp.watch(srcPath.scss, gulp.series(Sass))
}

exports.default = gulp.series(
	gulp.parallel(Sass),
	gulp.parallel(watchFiles)
);
