var gulp           = require('gulp'),
    svgSprite      = require('gulp-svg-sprite'),
    del            = require('del'),
    taskListing    = require('gulp-task-listing'),
    replace        = require('gulp-replace');

// SVG
var $ = {
  gutil: require('gulp-util'),
  svgSprite: require('gulp-svg-sprite'),
};



// Clean nodejs.module folder
gulp.task('clean:nodejsmodule', function (done) {
  return del([
    './nodejs.module/**/*'
  ]);
  done();
});

//////////////////////////////
// SVG sprite generator
//////////////////////////////

// How to?
// SVG icons should go to "/svg-source/svgs" folder and must be all the same size,
// the folder name "icon" will be added in to svg id, so it will be "{icon name}"
// SVG sprite will be created in "images" folder
// To create SVG sprite type "gulp svg-sprite-create"

// First clean all sprite elements
gulp.task('clean:svgicons', function (done) {
  return del([
    './views/components/icon/template.njk',
    './svg-source/delivery/**/*',
    './src/assets/images/occlss/occlss-sprite.svg'
  ]);
  done();
});

gulp.task('svg-sprite-create', function(done) {
  return gulp.src("svg-source/svgs/*")
    .pipe($.svgSprite({
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
    done();
});


// Generate files for NPM package
gulp.task('genNodeModule', function (done) {
  // get Sass files
  gulp.src(['./src/occlss-scss/**']).pipe(replace('"../../views/components/', '"components/')).pipe(gulp.dest('./nodejs.module/scss'));
  // get Component files
  gulp.src(['./views/components/**']).pipe(gulp.dest('./nodejs.module/scss/components'));
  // get JavaScript files
  gulp.src(['./src/assets/js/occlss/**','!./src/assets/js/occlss/browser.detect.js']).pipe(gulp.dest('./nodejs.module/js'));
  // get Images files
  gulp.src(['./src/assets/images/occlss/**', '!./src/assets/images/occlss/demo', '!./src/assets/images/occlss/demo/**']).pipe(gulp.dest('./nodejs.module/images'));
  done();
});


/******************************************************
 * COMPOUND TASKS
******************************************************/

gulp.task('node:gen', gulp.series('clean:nodejsmodule','clean:svgicons', 'svg-sprite-create','genNodeModule'));
gulp.task('svg:gen', gulp.series('clean:svgicons', 'svg-sprite-create'));


// Default task -------------------------
// Lists out available tasks.
// --------------------------------------
gulp.task('default', taskListing)