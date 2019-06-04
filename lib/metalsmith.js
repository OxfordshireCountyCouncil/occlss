const metalsmith             = require('metalsmith')                               // static site generator
const env                    = require('metalsmith-env')                           // environment vars plugin
const inplace                = require('metalsmith-in-place')                      // render templating syntax in your source files
const layouts                = require('metalsmith-layouts')                       // apply layouts to source files
const assets                 = require('metalsmith-assets')                        // copy static assets
const sass                   = require('metalsmith-sass')                          // convert Sass files to CSS using LibSass
const postcss                = require('metalsmith-postcss')
const permalinks             = require('metalsmith-permalinks')                    // apply a permalink pattern to files

const navigation             = require('./navigation.js')                          // navigation plugin
const extractPageHeadings    = require('../lib/extract-page-headings.js')          // extract page headings into file meta data

const debug                  = require('./debug')                                  // debug plugin

const fileHelper             = require('../lib/file-helper.js')                    // helper function to operate on files
const modernizrBuild         = require('./modernizr-build.js')                     // modernizr build plugin
const paths                  = require('../config/paths.json')                     // specify paths to main working directories
const highlighter            = require('./highlighter.js')
const lastfirststr           = require('./lastfirststr.js')                        // function adding string without last word or last word from the string

// store views paths for rendering nunjucks syntax
const views = [
  paths.layouts,
  paths.partials,
  paths.comp
]

const inplaceCnf = {
  pattern: '**/*.njk',
  engineOptions: {
    // Nunjucks engine options
    path: views,
    noCache: true, // never use a cache and recompile templates each time
    trimBlocks: true, // automatically remove trailing newlines
    lstripBlocks: true, // automatically remove leading whitespace
    globals: {
      getFrontmatter: fileHelper.getFrontmatter,
      getNunjucksCode: fileHelper.getNunjucksCode,
      getHTMLCode: fileHelper.getHTMLCode,
      getFingerprint: fileHelper.getFingerprint
    },
    filters: {
      highlight: highlighter,
      lastfirststr: lastfirststr
    },
    // Markdown engine options
    smartypants: true, // use "smart" typographic punctuation
    gfm: true,
    tables: true,
    pedantic: true,
    highlight: highlighter
  }
};

const layoutsCnf = {
  default: 'layout.njk',
  directory: '../' + paths.layouts,
  pattern: '**/*.html',
  engineOptions: {
    path: views,
    globals: {
      joinPaths: fileHelper.joinPaths,
      getFingerprint: fileHelper.getFingerprint
    }
  }
};

const sassCnf = {
  outputStyle: "expanded",
  outputDir: 'assets/css/',
  sourceMap: true,
  sourceMapContents: true,   // This will embed all the Sass contents in your source maps.
  includePaths: ['occlss/scss','node_modules/reflex-grid/scss','node_modules/breakpoint-sass/stylesheets'] // an array of paths that sass can look in when attempt to resolve @import declarations
};

// static site generator
module.exports = metalsmith(__dirname) // __dirname defined by node.js: name of current working

  // global variables used in layout files
  .metadata({
    title: '[TITLE NOT SET]'
  })

  // extract page headings
  .use(extractPageHeadings())

  // source directory
  .source('../' + paths.source)

  // destination directory
  .destination('../' + paths.public)

  // clean destination before build
  .clean(true)

  // include environment variables as metalsmith metadata
  // used to e.g. detect when we're building in a preview environment
  .use(env())

  // convert *.scss files to *.css
  .use(sass(sassCnf))

  .use(postcss({
    plugins: {
      'autoprefixer': {}
    }
  }))


  // build modernizr.js file
  .use(modernizrBuild({
    config: '../config/modernizr.json',
    destination: 'assets/js/vendor/',
    filename: 'modernizr.js'
  }))


  // copy static assets from node_modules/html5shiv/dist
  .use(assets({
    source: '../' + paths.html5shiv,
    destination: 'assets/js/vendor/'
  }))
  
  // copy static assets from node_modules/iframe-resizer
  .use(assets({
    source: '../' + paths.iframeresizer + 'js/',
    destination: 'assets/js/vendor'
  }))

  // copy images from node_modules/occlss
  .use(assets({
    source: '../occlss/images/',
    destination: 'assets/images/occlss/'
  }))

  // copy js from node_modules/occlss
  .use(assets({
    source: '../occlss/js/',
    destination: 'assets/js/occlss/'
  }))
  

  // render templating syntax in source files
  .use(inplace(inplaceCnf))

  // apply a permalink pattern to files
  .use(permalinks({
    relative: false
  }))

  // apply navigation
  .use(navigation())

  // apply layouts to source files
  .use(layouts(layoutsCnf))

  // Debug
  //.use(debug())
