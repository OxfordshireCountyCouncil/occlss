/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/
var gulp          = require('gulp'),
    path          = require('path'),
    browserSync   = require('browser-sync').create(),
    svgSprite     = require('gulp-svg-sprite'),
    argv          = require('minimist')(process.argv.slice(2)),
    sass          = require('gulp-sass'),
    plumber       = require('gulp-plumber'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    htmlsplit     = require('gulp-htmlsplit'),
    sassdoc       = require('sassdoc'),
    del           = require('del'),
    replace       = require('gulp-replace');

  // SVG
  var $ = {
    gutil: require('gulp-util'),
    svgSprite: require('gulp-svg-sprite'),
    size: require('gulp-size'),
  };

// Publick CSS minify
var cleanCSS    = require('gulp-clean-css');

gulp.task('sass', function(){
    return gulp.src('source/css/scss/style.scss')
    //.pipe(sassdoc())
    .pipe(plumber('Error Running Sass'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 5,
      //outputStyle: 'expanded'
      outputStyle: argv.production ? 'compressed' : 'nested',
    }))
    .pipe(autoprefixer({
			browsers: ['last 2 versions', 'iOS 7'],
			cascade: true
		}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
    stream: true
    }))
})


//////////////////////////////
// SVG sprite generator
//////////////////////////////


// How to?
// SVG icons should go to "/source/svg-source/svgs" folder and must be all the same size,
// the folder name "icon" will be added in to svg id, so it will be "{icon name}"
// SVG sprite will be created in "images" folder
// To create SVG sprite type "gulp svg-sprite-create"

var changeEvent = function(evt) {
  $.gutil.log('File', $.gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + path.resolve(paths().SVGPaths.base.src) + ')/'), '')), 'was', $.gutil.colors.magenta(evt.type));
};

// First clean all sprite elements
gulp.task('clean:svgicons', function (done) {
  return del([
    './source/_patterns/00-atoms/02-icons/**/*',
    './source/svg-source/delivery/**/*',
    './source/images/occlss-sprite.svg',
    './source/css/scss/bem/_occlss-icon-gen.scss'
  ]);
  done();
});

gulp.task('svg-sprite-create', function(done) {
  return gulp.src(path.resolve(paths().SVGPaths.sprite.src))
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
          sprite: path.resolve(paths().SVGPaths.sprite.svgdest),
          bust: false,
          render: {
            /*scss: {
              dest: path.resolve(paths().SVGPaths.scss.dest),
              template: path.resolve(paths().SVGPaths.scss.template)
            },*/
            mustache: {
              dest: path.resolve(paths().SVGPaths.mustache.dest),
              template: path.resolve(paths().SVGPaths.mustache.template)
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
    .pipe(gulp.dest(path.resolve(paths().SVGPaths.base.dest)));
    done();
});

gulp.task('split-svg-mustache', function(done) {
  gulp.src('./source/svg-source/delivery/*.mustache')
    .pipe(replace('-modClass-', '{{ modClass }}'))
    .pipe(htmlsplit())
    .pipe(gulp.dest('./source/_patterns/00-atoms/02-icons/'));
    done();
});

/******************************************************
 * COPY TASKS - stream assets from source to destination
******************************************************/

// JS copy
gulp.task('pl-copy:js', function(){
  return gulp.src('**/*.js', {cwd: path.resolve(paths().source.js)} )
    .pipe(gulp.dest(path.resolve(paths().public.js)));
});

// Images copy
gulp.task('pl-copy:img', function(){
  return gulp.src('**/*.*',{cwd: path.resolve(paths().source.images)} )
    .pipe(gulp.dest(path.resolve(paths().public.images)));
});

// Favicon copy
gulp.task('pl-copy:favicon', function(){
  return gulp.src('favicon.ico', {cwd: path.resolve(paths().source.root)} )
    .pipe(gulp.dest(path.resolve(paths().public.root)));
});

// Fonts copy
gulp.task('pl-copy:font', function(){
  return gulp.src('*', {cwd: path.resolve(paths().source.fonts)})
    .pipe(gulp.dest(path.resolve(paths().public.fonts)));
});

// CSS Copy
gulp.task('pl-copy:css', function(){
  return gulp.src(path.resolve(paths().source.css, '*.css'))
    .pipe(gulp.dest(path.resolve(paths().public.css)))
    .pipe(browserSync.stream());
});

// Styleguide Copy everything but css
gulp.task('pl-copy:styleguide', function(){
  return gulp.src(path.resolve(paths().source.styleguide, '**/!(*.css)'))
    .pipe(gulp.dest(path.resolve(paths().public.root)))
    .pipe(browserSync.stream());
});

// Styleguide Copy and flatten css
gulp.task('pl-copy:styleguide-css', function(){
  return gulp.src(path.resolve(paths().source.styleguide, '**/*.css'))
    .pipe(gulp.dest(function(file){
      //flatten anything inside the styleguide into a single output dir per http://stackoverflow.com/a/34317320/1790362
      file.path = path.join(file.base, path.basename(file.path));
      return path.resolve(path.join(paths().public.styleguide, 'css'));
    }))
    .pipe(browserSync.stream());
});

/******************************************************
 * PATTERN LAB CONFIGURATION - API with core library
******************************************************/
//read all paths from our namespaced config file
var config = require('./patternlab-config.json'),
  patternlab = require('patternlab-node')(config);

function paths() {
  return config.paths;
}

function getConfiguredCleanOption() {
  return config.cleanPublic;
}

function build(done) {
  patternlab.build(done, getConfiguredCleanOption());
}

gulp.task('pl-assets', gulp.series(
  gulp.parallel(
    'sass',
    'pl-copy:js',
    'pl-copy:img',
    'pl-copy:favicon',
    'pl-copy:font',
    'pl-copy:css',
    'pl-copy:styleguide',
    'pl-copy:styleguide-css'
  ),
  function(done){
    done();
  })
);

gulp.task('patternlab:version', function (done) {
  patternlab.version();
  done();
});

gulp.task('patternlab:help', function (done) {
  patternlab.help();
  done();
});

gulp.task('patternlab:patternsonly', function (done) {
  patternlab.patternsonly(done, getConfiguredCleanOption());
});

gulp.task('patternlab:liststarterkits', function (done) {
  patternlab.liststarterkits();
  done();
});

gulp.task('patternlab:loadstarterkit', function (done) {
  patternlab.loadstarterkit(argv.kit, argv.clean);
  done();
});

gulp.task('patternlab:build', gulp.series('pl-assets', build, function(done){
  done();
}));


/******************************************************
 * SERVER AND WATCH TASKS
******************************************************/
// watch task utility functions
function getSupportedTemplateExtensions() {
  var engines = require('./node_modules/patternlab-node/core/lib/pattern_engines');
  return engines.getSupportedFileExtensions();
}
function getTemplateWatches() {
  return getSupportedTemplateExtensions().map(function (dotExtension) {
    return path.resolve(paths().source.patterns, '**/*' + dotExtension);
  });
}

function reload() {
  browserSync.reload();
}

function watch() {
  
  gulp.watch(path.resolve(paths().source.scss, '**/**/*.scss')).on('change', gulp.series('sass', reload));
  gulp.watch(path.resolve(paths().source.css, '**/**/*.css')).on('change', gulp.series('pl-copy:css', reload));
  gulp.watch(path.resolve(paths().source.styleguide, '**/**/*.*')).on('change', gulp.series('pl-copy:styleguide', 'pl-copy:styleguide-css', reload));



  var patternWatches = [
    path.resolve(paths().source.patterns, '**/*.json'),
    path.resolve(paths().source.patterns, '**/*.md'),
    path.resolve(paths().source.data, '*.json'),
    path.resolve(paths().source.fonts + '/*'),
    path.resolve(paths().source.images + '/*'),
    path.resolve(paths().source.meta, '*'),
    path.resolve(paths().source.annotations + '/*')
  ].concat(getTemplateWatches());

  gulp.watch(patternWatches).on('change', gulp.series(build, reload));

}

gulp.task('patternlab:connect', gulp.series(function(done) {
  browserSync.init({
    server: {
      baseDir: path.resolve(paths().public.root)
    },
    snippetOptions: {
      // Ignore all HTML files within the templates folder
      blacklist: ['/index.html', '/', '/?*']
    },
    notify: {
      styles: [
        'display: none',
        'padding: 15px',
        'font-family: sans-serif',
        'position: fixed',
        'font-size: 1em',
        'z-index: 9999',
        'bottom: 0px',
        'right: 0px',
        'border-top-left-radius: 5px',
        'background-color: #1B2032',
        'opacity: 0.4',
        'margin: 0',
        'color: white',
        'text-align: center'
      ]
    }
  }, function(){
    console.log('PATTERN LAB NODE WATCHING FOR CHANGES');
  });
  done();
}));


// Generate files for NPM package
gulp.task('genNodeModule', function (done) {
  // get Sass files
  gulp.src(['./source/css/scss/**']).pipe(gulp.dest('./nodejs.module/scss'));

  // get JavaScript files
  gulp.src(['./source/js/**','!./source/js/browser.detect.js']).pipe(gulp.dest('./nodejs.module/js'));

  // get Images files
  gulp.src(['./source/images/**', '!./source/images/demo', '!./source/images/demo/**']).pipe(gulp.dest('./nodejs.module/images'));
  done();
});


// Generate CSS framework files
gulp.task('genCSSframework', function (done) {
  gulp.src(['./source/css/**', '!./source/css/pattern-scaffolding.css']).pipe(gulp.dest('./CSSframework'));
  done();
});

gulp.task('minify-default-css', function(done) {
  return gulp.src('./public/css/style.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./public/css/'));
  done();
});

/******************************************************
 * COMPOUND TASKS
******************************************************/
gulp.task('default', gulp.series('patternlab:build'));
gulp.task('gen', gulp.series('genCSSframework','genNodeModule'));
gulp.task('patternlab:watch', gulp.series('patternlab:build', watch));
gulp.task('patternlab:serve', gulp.series('clean:svgicons', 'svg-sprite-create', 'split-svg-mustache','patternlab:build', 'patternlab:connect', watch));
gulp.task('start', gulp.series('clean:svgicons', 'svg-sprite-create', 'split-svg-mustache','patternlab:build', 'patternlab:connect', watch));
