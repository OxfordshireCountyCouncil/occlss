const gulp           = require('gulp')
const taskListing    = require('gulp-task-listing')
const replace        = require('gulp-replace')
const cleanCSS       = require('gulp-clean-css')
const rename         = require('gulp-rename')
const fs             = require('node:fs')
const svgSprite      = require('gulp-svg-sprite')
const plumber        = require('gulp-plumber')
const sourcemaps     = require('gulp-sourcemaps')

const sass = require('gulp-sass')(require('sass'))


// Generate files for NPM package
gulp.task('genNodeModule', function (cb) {
  // get Sass files
  gulp.src(['./src/occlss-scss/**'])
  .pipe(replace('"../../views/components/', '"components/'))
  .pipe(replace('../../images','../images')) 
  .pipe(gulp.dest('./nodejs.module-files/scss'));
  // get Component files
  gulp.src(['./views/components/**']).pipe(gulp.dest('./nodejs.module-files/scss/components'));
  // get JavaScript files
  gulp.src(['./src/assets/js/occlss/**','!./src/assets/js/occlss/browser.detect.js']).pipe(gulp.dest('./nodejs.module-files/js'));
  // get Images files
  gulp.src(['./src/assets/images/occlss/**', '!./src/assets/images/occlss/demo', '!./src/assets/images/occlss/demo/**']).pipe(gulp.dest('./nodejs.module-files/images'));
  cb()
});

// Compile node module sass
gulp.task('genNodeModule:sass', function(cb){
  return gulp.src('./nodejs.module-files/scss/occlss.scss')
  .pipe(plumber('Error Running Sass'))
  .pipe(sourcemaps.init())
  .pipe(sass({
    precision: 5,
  }))
  .pipe(gulp.dest('./nodejs.module-files/css'))
  cb()
})

// Clean and minify css
gulp.task('genNodeModule:mincss', function(cb){
  return gulp.src('./nodejs.module-files/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./nodejs.module-files/css'))
  cb()
})

// Clean nodejs.module-files folder
gulp.task('clean:nodejsmodule', async function() {
  if (fs.existsSync('nodejs.module-files')) {
    return fs.rmdirSync('nodejs.module-files', {force: true, recursive: true})
  }
});


gulp.task('svg-sprite-create', function(cb) {
  return gulp.src("svg-source/svgs/*")
    .pipe(svgSprite({
      shape: {
        spacing: {
          padding: 0,
          box: 'content'
        },
        dimension: { // Set maximum dimensions
          width: 32,
          height: 32
        },
      },
      mode: {
        symbol: {
          dest: "./",
          layout: "diagonal",
          sprite: "./src/assets/images/occlss/occlss-sprite.svg",
          bust: false,
          render: {
            njk: {
              dest: "./views/components/icon/template",
              template: "./svg-source/tpl/custom.html"
            }
          }
        }
      },
      svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false, // don't include the !DOCTYPE declaration
        namespaceClassnames: false
      },
      variables: {
        mapname: "icons"
      }
    }))
    .pipe(replace('--icon-class--', '{{ params.class }}'))
    .pipe(replace('--icon-container-class--', '{{ params.containerClass }}'))
    .pipe(replace('--icon-source-class--', '{{ params.sourceClass }}'))
    .pipe(gulp.dest("./"));
    cb()
});


// Generate node module source files
gulp.task('node:gen', gulp.series(
  'clean:nodejsmodule',
  'genNodeModule'
));

gulp.task('node:MinGen', gulp.series(
  'genNodeModule:sass',
  'genNodeModule:mincss'
));



// Default task -------------------------
// Lists out available tasks.
// --------------------------------------
gulp.task('default', taskListing)
