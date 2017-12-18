var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  pug = require('gulp-pug'),
  browserSync = require('browser-sync'),
  rename = require('gulp-rename'),
  smartgrid = require('smart-grid'),
  uglify = require('gulp-uglify');

//smartgrid options
var sgsettings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '1.875%', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '4000px', /* max-width оn very large screen */
        fields: '0px' /* side fields */
    },
    // breakPoints: {
    //     lg: {
    //         width: '1100px', /* -> @media (max-width: 1100px) */
    //     },
    //     md: {
    //         width: '960px'
    //     },
    //     sm: {
    //         width: '780px',
    //         fields: '15px' /* set fields only if you want to change container.fields */
    //     },
    //     xs: {
    //         width: '560px'
    //     }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    //}
};


gulp.task('sass', function(){
  return gulp.src(['dev/sass/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dev/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
  return gulp.src('dev/pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dev/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
  return gulp.src('dev/js/main.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);      
     }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dev/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'dev'
    },
    notify: false,
    open: false
  });
});

// regenerate smartgrid file
gulp.task('sg', function(){
  smartgrid('dev/sass', sgsettings);
});

gulp.task('watch', ['browser-sync', 'pug', 'sass'], function (){
  global.watch = true;
  gulp.watch('dev/sass/*.scss', ['sass']);
  gulp.watch('dev/pug/**/*.pug', ['pug']);
});

gulp.task('default', ['watch']);
